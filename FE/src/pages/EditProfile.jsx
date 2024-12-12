import React from 'react'

function EditProfile() {
  return (
    <div>
      <section>
        <div className="row"></div>
        <div className="profile-container">
          <a href="/EkplorasiLogin">
            <img src="/assets/images/arrow-left.png" alt="back" width="40px" className="back" />
          </a>
          <div className="profile-info mb-5">
            <img src="/assets/images/Akun.png" alt="profile" />
            <div className="detail">
              <h4>Admin</h4>
              <p></p>
              <button className="change-photo" data-bs-toggle="modal" data-bs-target="#modalUpdatePhoto" fdprocessedid="c1eov">Perbarui Foto</button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id="modalUpdatePhoto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" style={{display: 'none'}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Ganti Foto Profil</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form action="user/update-photo" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_method" value="put" />
                        <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                        <input type="file" className="form-control" id="customFile" name="image" />
                        <button type="submit" className="btn-action mt-3">Simpan</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me d-block mt-5">
            <form action="user/update" method="POST" className="d-flex flex-row w-100 px-5">
              <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
              <input type="hidden" name="_method" value="PUT" />
              <div className="col-lg-6 px-2">
                <div className="mb-4">
                  <input type="text" placeholder="Nama" name="name" id="name" value="" fdprocessedid="iwwfp" />
                </div>
                <div className="mb-4">
                  <textarea rows="16" type="text" placeholder="Biografi atau deskripsi diri" name="description" id="bio"></textarea>
                </div>
                <div className="mt-1">
                  <textarea type="text" placeholder="Keahlian" name="skill" id="keahlian"></textarea>
                </div>
              </div>
              <div className="col-lg-3 px-2 mt-5">
                <div className="mt-3 mb-3">
                  <input type="text" placeholder="Alamat" name="address" id="address" value="" fdprocessedid="kkt5ln" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder="Email" name="email" id="email" value="" fdprocessedid="s3egpn" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Instagram" name="instagram" id="instagram" value="" fdprocessedid="6jyj4" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Twitter" name="twitter" id="twitter" value="" fdprocessedid="sqmvk4" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Linkedin" name="linkedin" id="linkedin" value="" fdprocessedid="n2cfak" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Facebook" name="facebook" id="facebook" value="" fdprocessedid="m4t5sn" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Website pribadi (opsional)" name="website" id="website" value="" fdprocessedid="7fn5fi" />
                </div>
              </div>
              <div className="col-lg-3 w-25">
                <div className="action">
                  <button className="btn-action" fdprocessedid="n9167j">Simpan</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EditProfile