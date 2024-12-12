import React, { useState, useEffect } from "react";

function KaryaPengguna() {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('https://fakeimg.pl/350x200/?text=Artwork');
  const [saveImage, setSaveImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    fetch('http://localhost:5000/getUser', {
      method: 'GET',
      credentials: 'include', // Include cookies for session
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then((data) => {
        setUsername(data.username);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    async function fetchWorks() {
      try {
        const response = await fetch('http://localhost:4000/works'); // Ganti dengan URL API yang sesuai
        const result = await response.json();
        if (result.status) {
          setWorks(result.data); 
          console.log(result.data[0].imageUrl); 
        } else {
          console.error('Gagal mengambil data karya');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchWorks();
  }, []);

  function handleImage(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded); // Simpan gambar yang di-upload
  }

  async function postWork(e) {
    e.preventDefault(); // Mencegah form dari reload otomatis
    if (!saveImage) {
      alert("Silakan unggah gambar terlebih dahulu");
    } else {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('photos', saveImage);
      formData.append('description', description); 
      formData.append('category', category); 
  
      try {
        const response = await fetch('http://localhost:4000/works', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.status === true) {
          console.log('Data berhasil diupload:', data);
          alert('Karya Kamu Berhasil diupload!');
  
          // Tambahkan karya yang baru ke state works
          setWorks(prevWorks => [
            ...prevWorks,
            {
              id: data.data.id,
              title: data.data.title,
              imageUrl: data.data.imageUrl,
              description: data.data.description,
              category: data.data.category,
              author: data.data.author,
            },
          ]);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

  async function handleDelete(id) {
    if (window.confirm("Apakah Anda yakin ingin menghapus karya ini?")) {
      try {
        const response = await fetch(`http://localhost:4000/works/${id}`, {
          method: 'DELETE',
        });
  
        const result = await response.json();
        if (result.status) {
          alert("Karya berhasil dihapus!");
          setWorks(prevWorks => prevWorks.filter(work => work.id !== id));
        } else {
          alert("Gagal menghapus karya.");
        }
      } catch (error) {
        console.error("Error deleting work:", error);
        alert("Terjadi kesalahan saat menghapus karya.");
      }
    }
  }

  return (
    <div className='w-full'>
      <section>
        <div className="profile-container">
          <a href="/EkplorasiLogin">
            <img src="/assets/images/arrow-left.png" alt="back" width="40px" className="back" />
          </a>
          <div className="profile-info">
            <img src="/assets/images/Akun.png" alt="profile" />
            <div className="detail">
              <h4>{username || 'Loading...'}</h4>
            </div>
          </div>
          <div className="menu mb-3">
            <a href='/KaryaPengguna'><button className="btn-menu active" id="btn-karya" fdprocessedid="6etnix">Karya kamu</button></a>
            <a href="/TentangKamu"><button className="btn-menu" id="btn-tentang" fdprocessedid="m52kcb">Tentang kamu</button></a>
          </div>
          <hr />
          <div className="my-artworks">
            <div className="action mt-5 mb-3">
              <button type="button" className="btn-action text-Dark" data-bs-toggle="modal" data-bs-target="#modalListDelete" fdprocessedid="zet1w">Hapus</button>
              {/* Modal untuk Hapus */}
              <div className="modal fade" id="modalListDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Hapus Karya</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
  {works.length > 0 ? (
    works.map((work, index) => (
      <tr key={work.id}>
        <th scope="row">{index + 1}</th>
        <td>
          <img 
            src={`http://localhost:4000/images/${work.imageUrl.replace('public/images/', '')}`} 
            alt={work.title} 
            width="50px" 
          />
        </td>
        <td className="description">{work.description}</td>
        <td>{work.category}</td>
        <td>
          <button
            className="btn-delete"
            onClick={() => handleDelete(work.id)}
          >
            Hapus
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">Tidak ada karya untuk ditampilkan</td>
    </tr>
  )}
</tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Unggah Karya */}
              <div className="dropdown">
                <button className="btn-action" type="button" data-bs-toggle="dropdown">Unggah </button>
                <div className="dropdown-menu upload mt-2 mb-5">
                  <form onSubmit={postWork}>
                    <div>
                      <label htmlFor="title">Judul Karya</label>
                      <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} className="block p-2 font-mono w-full mb-5 text-xs text-Dark border border-Dark rounded-lg cursor-pointer bg-white"/>
                    </div>
                    <div className="mb-3">
                      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold">Upload Gambar</label>
                      <input
                          className="block p-2 font-mono w-full mb-5 text-xs text-white border border-Dark rounded-lg cursor-pointer bg-Dark"
                          id="file_input"
                          type="file"
                          name="photos"
                          onChange={handleImage}
                          accept="image/*"
                      />
                    </div>
                    <div className="mb-4">
                      <img src={image} alt="artwork" className="w-full h-auto rounded-lg transition duration-300 ease-in-out transform hover:scale-105" />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold" htmlFor="description">Tambahkan Deskripsi</label>
                      <textarea
                        className="block w-full text-sm text-gray-900 border border-Dark rounded-lg cursor-pointer bg-white p-2"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-2">
                      <select
                        className="bg-Dark border border-gray-300 text-white text-sm rounded-lg focus:ring-Green focus:border-Green block w-full p-2.5"
                        aria-label="select-category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="Digital Art">Digital Art</option>
                        <option value="Poster">Poster</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Wallpaper">Wallpaper</option>
                        <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                        <option value="Ilustrasi">Ilustrasi</option>
                        <option value="Portofolio">Portofolio</option>
                        <option value="Typography">Typography</option>
                        <option value="PowerPoint">PowerPoint</option>
                        <option value="Animasi">Animasi</option>
                        <option value="Tanah Liat">Tanah Liat</option>
                      </select>
                    </div>
                    <div className="bg-Green hover:bg-Dark text-white font-bold py-2 px-4 rounded-full mt-4 text-center">
                      <button type="submit" className="btn-upload">Upload</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="artwork-content justify-center mt-5">
            <div className="card-artwork">
              <div className="card-artwork-description flex flex-wrap justify-center gap-4">
                {works.length > 0 ? (
                  works.map((work, index) => (
          <div
            key={work.id}
            className="work-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
<img
  src={`http://localhost:4000/${work.imageUrl.replace(/\\/g, '/')}`}
  alt={work.title}
  className="work-image w-full h-auto object-cover rounded-md"
/>

            <div className="flex flex-col justify-center items-center">
                <h2 className="work-title mt-2 text-xl font-semibold">{work.title}</h2>
                <p className="work-description text-gray-600">{work.description}</p>
                <p className="work-category text-sm text-gray-500">{work.category}</p>
                <p className="work-author text-sm text-gray-500">Author: {work.author}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No works available</p>
      )}
              </div>
            </div>
          </div>
          <div className="about-me">
            <div className="d-flex flex-row w-100 px-5">
              <div className="col-lg-6 px-2">
                <div className="mb-4">
                  <input type="text" placeholder="Nama" name="name" id="name" readOnly value="Admin" className="text-muted" />
                </div>
                <div className="mb-4">
                  <textarea rows="16" type="text" placeholder="Biografi atau deskripsi diri" name="bio" id="bio" readOnly className="text-muted"></textarea>
                </div>
                <div className="mt-1">
                  <textarea type="text" placeholder="Keahlian" name="keahlian" id="keahlian" readOnly className="text-muted"></textarea>
                </div>
              </div>
              <div className="col-lg-3 px-2 mt-5">
                <div className="mt-3 mb-3">
                  <input type="text" placeholder="Alamat" name="address" id="address" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder="Email" name="email" id="email" readOnly value="admin@gmail.com" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Instagram" name="instagram" id="instagram" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Twitter" name="twitter" id="twitter" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Linkedin" name="linkedin" id="linkedin" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Facebook" name="facebook" id="facebook" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Website pribadi (opsional)" name="website" id="website" readOnly value="" className="text-muted" />
                </div>
              </div>
              <div className="col-lg-3 w-25">
                <div className="action">
                  <a href="user/edit-profile" style={{textDecoration: 'none'}} className="btn-outline">
                    <button className="btn-action" data-bs-toggle="modal" data-bs-target="#modalListDelete" fdprocessedid="zet1w">Edit Profile</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KaryaPengguna;
