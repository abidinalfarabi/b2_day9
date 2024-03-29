// penggabungan promise dan juga ajax
const dataProm = new Promise((resolves, rejected) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/6bb659b8fcf59bc60cba", true);
  xhr.onload = () => {
    if ((xhr.status = 5000)) {
      resolves(JSON.parse(xhr.response));
    } else {
      rejected("Internal Server Error!");
    }
  };
  xhr.onerror = () => {
    // kesalahan kita sendiri / client
    rejected("Internet tidak ada!");
  };
  xhr.send();
});

// fungsi untuk mengambil nilai dari array of object dan memasukkannya pada file html
function html(item) {
  return `<div class="testimonial">
    <img src="${item.Image}" class="profile-testimonial" />
    <p class="quote">"${item.Content}"</p>
    <p class="author">- ${item.Author}</p>
    <p class="author">${item.Rating} <i class="fa-solid fa-star"></i></p>
</div>`;
}

// function untuk menampilkan data sesuai banyak data yang ada pada array of object tadi yaitu Testimonial
// yang menggunakan function forEach untuk melooping sesuai banyak data pada array of object tadi,
// lalu menambahkan data ke file html menggunakn innerHTML
async function testimonialData() {
  let testimonialHTML = ``;
  const Testimonial = await dataProm;
  Testimonial.forEach((item) => {
    testimonialHTML += html(item);
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

// untuk menampilkan data ketika web baru dibuka
testimonialData();

// function untuk membuat filter tentang rating dimana ketika kita memilih button sesuai dengan ratingnya
// maka akan menampilkan isi data sesuai dengan rating yang kita pilih,
// menggunakan function filter untuk mengembalikan value sesuai apa yang diminta
async function filterTestimonials(Rating) {
  let testimonialHTML = ``;
  const Testimonial = await dataProm;
  const testimonialFiltered = Testimonial.filter((item) => {
    return item.Rating === Rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h3>Data Not Found</h3>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML += html(item);
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
