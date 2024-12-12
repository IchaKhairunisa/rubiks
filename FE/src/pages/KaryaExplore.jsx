import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Impor useParams
import $ from 'jquery';

function KaryaExplore() {
  // Mengambil id dari URL
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      console.error("ID tidak ditemukan!");
      return;
    }

    // Pastikan `id` sudah terdefinisi sebelum melakukan AJAX
    $(document).ready(function () {
      $("#likeButton").click(function () {
        $.ajax({
          url: `/eksplorasi/like/${id}`,
          type: "POST",
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          success: function (response) {
            $("#likeCount").text(response.count);
            $("#likeButton").hide();
            $("#unlikeButton").show();
          },
          error: function (response) {
            console.log(response);
          },
        });
      });

      $("#unlikeButton").click(function () {
        $.ajax({
          url: `/eksplorasi/like/${id}`,
          type: "POST",
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          success: function (response) {
            $("#likeCount").text(response.count);
            $("#unlikeButton").hide();
            $("#likeButton").show();
          },
          error: function (xhr) {
            console.log(xhr.responseText);
          },
        });
      });
    });
  }, [id]);  // Pastikan useEffect dijalankan ulang jika id berubah

  return (
    <div>
      <section>
        <div className="detail-exploration">
          <a href="/eksplorasi">
            <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back" />
          </a>
          <div className="row d-flex">
            <div className="content-left col-lg-6">
              <div className="author-info d-flex justify-content-between">
                <div className="name">
                  <img width="40px" alt="" style={{borderRadius: '50%'}} src="/assets/images/Akun.png" />
                  <h4>Admin</h4>
                </div>
              </div>
              <div className="artwork mt-1">
                <img src="/assets/images/posters.png" alt="Illustration" className="img-fluid" />
              </div>
            </div>
            <div className="content-right col-lg-6">
              <div className="description">
                <p>
                  Gambar ini adalah sebuah kolase artistik yang menampilkan wajah manusia yang disusun dari berbagai potongan gambar wajah lainnya, dengan tujuan menciptakan tampilan wajah baru yang unik dan berbeda...
                </p>
              </div>
              <div className="like-comment">
                <div className="like">
                  <p id="likeCount">0</p>
                  <img src="/assets/images/heart.png" alt="like" id="likeButton" style={{ cursor: 'pointer' }} />
                  <img src="/assets/images/heart-filled.png" alt="unlike" id="unlikeButton" style={{ display: 'none', cursor: 'pointer' }} />
                </div>
                <div className="comment">
                  <p>0</p>
                  <button id="commentButton">
                    <img src="/assets/images/comment.png" alt="comment" />
                  </button>
                </div>
              </div>
              <div className="textarea-container">
                <div className="textarea textarea-hidden">
                  <form action="eksplorasi/comment/1" method="POST">
                    <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                    <textarea id="commentTextarea" rows="4" cols="30" placeholder="Pop up textarea" name="message"></textarea>
                    <button type="submit" className="btn-okay">ok</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KaryaExplore;
