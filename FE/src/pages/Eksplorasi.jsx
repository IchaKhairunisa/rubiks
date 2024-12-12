import React, { useEffect } from 'react';
import $ from 'jquery';

function Eksplorasi() {
  useEffect(() => {
    // jQuery Script
    $(document).ready(function () {
      $(".choice-chip").click(function () {
        // Mengubah active button
        $(".choice-chip").removeClassName("active");
        $(this).addClassName("active");

        // Mengambil kategori yang dipilih
        const category = $(this).text();

        // AJAX Request
        $.ajax({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          url: "/eksplorasi",
          type: "POST",
          data: {
            category: category,
          },
          success: function (response) {
            // Mengosongkan konten lama
            $(".exploration-card .row").empty();

            // Memeriksa apakah ada karya
            if (response.length > 0) {
              // Menampilkan setiap karya
              $.each(response, function (index, artwork) {
                const card = `
                  <div className="card-artworks">
                    <a href="/eksplorasi/${artwork.id}">
                      <img src="assets/storage/artwork/${artwork.image}" alt="Illustration" className="img-fluid">
                    </a>
                    <div className="author-info gap-2">
                      ${
                        artwork.user && artwork.user.image
                          ? `<img src="storage/user/${artwork.user.image}" alt="author">`
                          : `<img src="/assets/images/default-profile.png" alt="author">`
                      }
                      <p className="author-name mt-3">${artwork.user ? `${artwork.user.name}, ${artwork.description.slice(0, 10)} ...` : "Unknown User"}</p>
                    </div>
                  </div>
                `;
                $(".exploration-card .row").append(card);
              });
            } else {
              $(".exploration-card .row").append("<p>Tidak ada karya</p>");
            }
          },
          error: function (xhr) {
            console.log(xhr.responseText);
          },
        });
      });
    });
  }, []);

  return (
    <div>
      <section>
        <div className="exploration">
          <h1 className="title">Eksplorasi</h1>
          <div className="exploration-category mt-5 d-flex align-items-center">
            <div className="row">
              <div className="choice-chip-container d-flex flex-wrap justify-content-center">
                <button className="choice-chip active">Digital Art</button>
                <button className="choice-chip">Poster</button>
                <button className="choice-chip">Web Design</button>
                <button className="choice-chip">Wallpaper</button>
                <button className="choice-chip">Kerajinan Tangan</button>
                <button className="choice-chip">Ilustrasi</button>
                <button className="choice-chip">Portofolio</button>
                <button className="choice-chip">Typography</button>
                <button className="choice-chip">PowerPoint</button>
                <button className="choice-chip">Animasi</button>
                <button className="choice-chip">Tanah Liat</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 1" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/08J58TD0H11hWSY0eHiobrL9xCbdZzqFmKpCoOSg.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 2" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/1wQCFTT1UGhIwNWEyR3oSuCvyu5efyMVlUr5UWIZ.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <a href="openprofile.html">
                <img alt="Artwork 3" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/8VHP7Cav7sLsMi1pb1SGrCcbwnG4ujQU6BVvVbhu.jpg" width="300" />
                <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
              </a>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 4" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/9y41UqYx3Hq1VSPWC6yCStG3JEFuEWw1QVi8LnHq.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 5" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/buNpXBzeqzDl8IKZ97nVcdVwpEFAFkIHmkN1gNdD.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 6" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/DmPk4gTXPjpqeGygWc8NQOGQhjn5QX19AOAuKJQZ.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 7" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/dwgBxFgAC4WNh4M1hooUdMxonDONHHcUjqABpk9e.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 8" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/elRoMLC5AHwhHshh2HcMnr0LYxvC0qdqXRScAtBu.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 9" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/FsUQxEy6i6qBbmcA9JjuLigAXiVnrzYKecgnPNJE.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 10" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/gaAdCEejhRJmKLtA0csJyZV8jD3igBpGBNDDCxzX.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 11" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/hcFqI0GcLKsafhVFEcZgvpRC7XxDLg07S2Qc2S1Q.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 12" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/hWPJudICyCIj7BvUJyvMd89jnJfxytzvOSDTAwGt.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 13" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/ImENwbgJHDRN81bAokxxSe9MSYJp5DSWf8SQwtjj.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 14" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/iQwCGV4LS5PaGeYNV5L8qtKoyTA5aNQ7BQk3cFie.jpg" width="300" />
              <p className="mt-2 text-gray-600">User, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 15" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/J7refnewjrDsFnLYfF4EuDQqc4VbflCxdYORprzY.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 16" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/JWPfpEWbeq3s47zmd1CFAZenImIn30Zqn5V0WrU4.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 17" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/k29FCKXRrdMXtsal9yYP41DqjNQTA7qtRRMj7g8m.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 18" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/kpSElhHKN0fUQRc2R8TaR9ar49N0HSwWQUs599hp.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 19" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/MRLbo5peNrNz7S9UvbIeovE4w76eez0ea4M8bJrQ.jpg" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img alt="Artwork 20" className="w-full h-64 object-cover rounded" height="400" src="assets/public/artwork/N2l8TW1ctbGkUqExGJAIkEfE1P4Vt7pYJJhaJmCT.png" width="300" />
              <p className="mt-2 text-gray-600">user, nama/judul karya.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eksplorasi;
