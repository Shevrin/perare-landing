import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.sass']
})
export class IndustriesComponent implements OnInit {

  constructor() { }
//класс у кнопки industries__btn--active
//класс у таба industries__content--active
  tabs = [
    {
      name: "Agen Real Estat",
      image: "../assets/landing/image/industries/tab-1.png",
      list:[
        {
          title: "Tingkatkan penghasilan Anda",
          description: "Periksa penawaran yang masuk dalam hitungan detik dan ubah ketidaknyamanan menjadi keunggulan kompetitif",
        },
        {
          title: "Tutup lebih banyak penawaran",
          description: "Hasilkan lebih banyak prospek dengan menyediakan data pasar eksklusif berbasis wawasan",
        },
        {
          title: "Tingkatkan efisiensi transaksi",
          description: "Cari tahu potensi setiap penawaran untuk menjadikannya yang paling menguntungkan bagi Anda dan pelanggan Anda",
        }
      ],
    },
      {
      name: "Penilai",
      image: "../assets/landing/image/industries/tab-2.png",
      list:[
        {
          title: "Tingkatkan penghasilan Anda",
          description: "Periksa penawaran yang masuk dalam hitungan detik dan ubah ketidaknyamanan menjadi keunggulan kompetitif",
        },
        {
          title: "Tutup lebih banyak penawaran",
          description: "Hasilkan lebih banyak prospek dengan menyediakan data pasar eksklusif berbasis wawasan",
        },
        {
          title: "Tingkatkan efisiensi transaksi",
          description: "Cari tahu potensi setiap penawaran untuk menjadikannya yang paling menguntungkan bagi Anda dan pelanggan Anda",
        }
      ],
    },
      {
      name: "Pengembang",
      image: "../assets/landing/image/industries/tab-3.png",
      list:[
        {
          title: "Tingkatkan penghasilan Anda",
          description: "Periksa penawaran yang masuk dalam hitungan detik dan ubah ketidaknyamanan menjadi keunggulan kompetitif",
        },
        {
          title: "Tutup lebih banyak penawaran",
          description: "Hasilkan lebih banyak prospek dengan menyediakan data pasar eksklusif berbasis wawasan",
        },
        {
          title: "Tingkatkan efisiensi transaksi",
          description: "Cari tahu potensi setiap penawaran untuk menjadikannya yang paling menguntungkan bagi Anda dan pelanggan Anda",
        }
      ],
    },
    {
      name: "Pengacara",
      image: "../assets/landing/image/industries/tab-4.png",
      list:[
        {
          title: "Tingkatkan penghasilan Anda",
          description: "Periksa penawaran yang masuk dalam hitungan detik dan ubah ketidaknyamanan menjadi keunggulan kompetitif",
        },
        {
          title: "Tutup lebih banyak penawaran",
          description: "Hasilkan lebih banyak prospek dengan menyediakan data pasar eksklusif berbasis wawasan",
        },
        {
          title: "Tingkatkan efisiensi transaksi",
          description: "Cari tahu potensi setiap penawaran untuk menjadikannya yang paling menguntungkan bagi Anda dan pelanggan Anda",
        }
      ],
    },
    {
      name: "Pembeli/Penjual",
      image: "../assets/landing/image/industries/tab-5.png",
      list:[
        {
          title: "Tingkatkan penghasilan Anda",
          description: "Periksa penawaran yang masuk dalam hitungan detik dan ubah ketidaknyamanan menjadi keunggulan kompetitif",
        },
        {
          title: "Tutup lebih banyak penawaran",
          description: "Hasilkan lebih banyak prospek dengan menyediakan data pasar eksklusif berbasis wawasan",
        },
        {
          title: "Tingkatkan efisiensi transaksi",
          description: "Cari tahu potensi setiap penawaran untuk menjadikannya yang paling menguntungkan bagi Anda dan pelanggan Anda",
        }
      ],
    }
  ]

  ngOnInit(): void {
  }

}
