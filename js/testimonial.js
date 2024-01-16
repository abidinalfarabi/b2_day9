// array of object yang mengandung value yang akan ditampilkan
const Testimonial = [
  {
    Author: "Muhamad Abidin",
    Content: "Teman Pembentuk Karakter",
    Image: "https://cdn.pixabay.com/photo/2017/01/22/01/23/stag-1998855_1280.jpg",
    Rating: 3,
  },
  {
    Author: "Mentor X",
    Content: "Kemanapun Pergi Kenangan Selalu Ada",
    Image: "https://cdn.pixabay.com/photo/2023/01/04/09/25/boho-7696303_1280.jpg",
    Rating: 1,
  },

  {
    Author: "Mentor Surya",
    Content: "Manusia hanyalah alat",
    Image: "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg",
    Rating: 5,
  },
];

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
function testimonialData() {
  let testimonialHTML = ``;
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
function filterTestimonials(Rating) {
  let testimonialHTML = ``;
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
