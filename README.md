# WasteSmart API Documentation

## Quiz
- Endpoint: /quiz
- Method: GET
- Response Code: 200 OK
- Response Body
  ```
    {
        "success": true,
        "quiz": [
            {
                "question": "Proses mengolah kembali sampah atau produk bekas pakai menjadi produk baru yang bermanfaat merupakan definisi dari ?",
                "options": [
                    "Daur ulang",
                    "Pengolahan Sampah",
                    "Bank Sampah",
                    "Pelestarian Lingkungan"
                ],
                "answer": "Daur ulang"
            },
            {
                "question": "Mengapa daur ulang sampah plastik sangat penting dilakukan ?",
                "options": [
                    "Karena plastik mudah terurai di alam",
                    "Karena plastik dapat digunakan berulang kali tanpa batas",
                    "Karena plastik dapat mencemari lingkungan jika tidak dikelola dengan baik dan membutuhkan waktu yang sangat lama untuk terurai",
                    "Karena produksi plastik membutuhkan biaya yang sangat murah"
                ],
                "answer": "Karena plastik dapat mencemari lingkungan jika tidak dikelola dengan baik dan membutuhkan waktu yang sangat lama untuk terurai"
            },
            ...
        ]
  }

## Funfacts
- Endpoint: /funfacts
- Method: GET
- Response Code: 200 OK
- Response Body
  ```
  {
      "success": true,
      "funfacts": [
          "Indonesia adalah penghasil sampah plastik terbesar kedua di dunia setelah Tiongkok.",
          "Banyak kota di Indonesia masih menggunakan tempat pembuangan akhir (TPA) yang tidak memenuhi standar lingkungan.",
          "Fasilitas Daur Ulang di Indonesia yang Belum Merata",
          ...
      ]
  }

## Tips
- Endpoint: /tips
- Method: GET
- Response Code: 200 OK
- Response Body
  ```
  {
    "success": true,
    "tips": {
        "sisa_makanan": "Kumpulkan sisa makanan serta sampah tumbuhan di tempat kompos, lalu tambahkan sedikit tanah atau kompos yang sudah jadi untuk mempercepat proses dekomposisi",
        "plastik": "Pisahkan sampah plastik dari sampah lainnya. Setelah terkumpul, bawa ke pengepul sampah atau tempat pengumpulan sampah daur ulang",
        "logam": "Pisahkan sampah logam dari sampah lainnya. Setelah terkumpul, bawa ke pengepul sampah atau tempat pengumpulan sampah daur ulang",
        ...
      }
  }
