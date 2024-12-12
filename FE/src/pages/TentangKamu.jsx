import React from 'react'

function TentangKamu() {
  return (
    <div>
      <section>
        <div className="profile-container">
          <a href="/EkplorasiLogin">
            <img src="/assets/images/arrow-left.png" alt="back" width="40px" className="back" />
          </a>
          <div className="profile-info">
            <img src="/assets/images/Akun.png" alt="profile" />
            <div className="detail">
              <h4>Admin</h4>
              <p></p>
            </div>
          </div>

          <div className="menu">
            <button className="btn-menu" id="btn-karya" fdprocessedid="6etnix">Karya kamu</button>
            <button className="btn-menu active" id="btn-tentang" fdprocessedid="m52kcb">Tentang kamu</button>
          </div>
          <hr />
          <div className="my-artworks" style={{display: 'none'}}>
            <div className="row"></div>
            <div className="action mt-2">
              <button type="button" className="btn-action" data-bs-toggle="modal" data-bs-target="#modalListDelete" fdprocessedid="zet1w">Hapus</button>
              {/* <!-- Modal --> */}
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
                          <tr>
                            <th scope="row">1</th>
                            <td><img src="storage/artwork/2GgtAm1hMv47H0hG8ZwLAiGAaFZ82eVBHriU7rC8.png" alt="artwork" width="50px" /></td>
                            <td className="description">...</td>
                            <td>Digital Art</td>
                            <td>
                              <form action="profile/1" method="POST">
                                <input type="hidden" name="_method" value="delete" />
                                <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                                <button className="btn-delete" onClick="return confirm('Are you sure?')">Hapus</button>
                              </form>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown">
                <button className="btn-action" type="button" data-bs-toggle="dropdown" fdprocessedid="y1c8oa">Unggah</button>
                <ul className="dropdown-menu upload">
                  <form action="profile" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                    <div className="mb-3">
                      <input type="file" className="form-control" id="inputfile" aria-describedby="inputgroupfile" aria-label="Upload" name="image" />
                    </div>
                    <div className="mb-3">
                      <label for="description">Tambahkan deskripsi</label>
                      <textarea type="text" name="description" id="description"></textarea>
                    </div>
                    <div className="mb-5">
                      <select className="form-select" aria-label="select-category" name="category_id">
                        <option selected="">Tambahkan kategori</option>
                        <option value="1">Digital Art</option>
                        <option value="2">Poster</option>
                        <option value="3">Web Design</option>
                        <option value="4">Wallpaper</option>
                        <option value="5">Kerajinan Tangan</option>
                        <option value="6">Ilustrasi</option>
                        <option value="7">Portofolio</option>
                        <option value="8">Typography</option>
                        <option value="9">PowerPoint</option>
                        <option value="10">Animasi</option>
                        <option value="11">Tanah Liat</option>
                      </select>
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                      <button type="submit" className="btn-action">ok</button>
                    </div>
                  </form>
                </ul>
              </div>
            </div>
            <div className="artwork-content">
              <div className="card-artwork">
                <img src="storage/artwork/2GgtAm1hMv47H0hG8ZwLAiGAaFZ82eVBHriU7rC8.png" alt="artwork" />
              </div>
            </div>
          </div>

          <div className="about-me" style={{display: 'block'}}>
            <div className="d-flex flex-row w-100 px-5">
              <div className="col-lg-6 px-2">
                <div className="mb-4">
                  <input type="text" placeholder="Nama" name="name" id="name" readonly="" value="Admin" />
                </div>
                <div className="mb-4">
                  <textarea rows="16" type="text" placeholder="Biografi atau deskripsi diri" name="bio" id="bio" readonly=""></textarea>
                </div>
                <div className="mt-1">
                  <textarea type="text" placeholder="Keahlian" name="keahlian" id="keahlian" readonly=""></textarea>
                </div>
              </div>
              <div className="col-lg-3 px-2 mt-5">
                <div className="mt-3 mb-3">
                  <input type="text" placeholder="Alamat" name="address" id="address" readonly="" value="" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder="Email" name="email" id="email" readonly="" value="admin@gmail.com" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Instagram" name="instagram" id="instagram" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Twitter" name="twitter" id="twitter" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Linkedin" name="linkedin" id="linkedin" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Facebook" name="facebook" id="facebook" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Website pribadi (opsional)" name="website" id="website" readonly="" value="" />
                </div>
              </div>
              <div className="col-lg-3 w-25">
                <div className="action">
                  <a href="/EditProfile" style={{textDecoration: 'none'}} className="btn-action">Edit profil </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TentangKamu