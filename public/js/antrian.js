    //TODO Give all CSRF 
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }

    });
    
    let nomorAntrianSekarang =$('#nomorAntrianTerakhir').val();
    let warnaAntrianSekarang = $('#warnaKartuTerakhir').val();
    let jumlahAntrian = 100;
    let nomorAntrianBiru = parseInt($('#jumlah-pasien-biru').html());
    let nomorAntrianPink = parseInt($('#jumlah-pasien-pink').html());
    let nomorAntrianHijau = parseInt($('#jumlah-pasien-hijau').html());
    let suara1 = document.getElementById("satu");
    let suara2 = document.getElementById("dua");
    let suara3 = document.getElementById("tiga")
    let suara4 = document.getElementById("empat");
    let suara5 = document.getElementById("lima");
    let suara6 = document.getElementById("enam");
    let suara7 = document.getElementById("tujuh");
    let suara8 = document.getElementById("delapan");
    let suara9 = document.getElementById("sembilan");
    let suara10 = document.getElementById("sepuluh");
    let suara11 = document.getElementById("sebelas");
    let suaraBelas = document.getElementById("belas");
    let suaraPuluh = document.getElementById("puluh");
    let suaraHijau = document.getElementById("hijau");
    let suaraBiru = document.getElementById("biru");
    let suaraPink = document.getElementById("merah_muda");
    let suaraNomorAntrian = document.getElementById("nomor_antrian");
    let kosong = document.getElementById("kosong");


    $(document).ready(function () {
        $('#tablePasienHariIni').DataTable( {
            dom: 'Blfrtip',
            buttons: [
                {
    
                    extend: 'print',
                    text: 'Print ',
                    /* autoPrint: false, */
                    orientation: 'portrait',
                    exportOptions: {
                        modifier: {
                            page: 'current',
                            
                        }
                    },
                    customize: function (win) {
                        $(win.document.body).find('table').addClass('display').css('font-size', '15px');
                        $(win.document.body).find('h1').css('text-align','center').addClass('header');
                        $(win.document.body).find('title').html('');
                        $(win.document.body).find('.header').html('Daftar Pasien tanggal ' + moment().format('dddd, Do - MMMM - YYYY'));
                        /* $(win.document.body).find('h1').html('Hello'); */
                    },
                  
                },
                {
                    extend: 'excelHtml5',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        }
                    }, customize: function ( xlsx ) {
                        var sheet = xlsx.xl.worksheets['sheet1.xml'];
 
                        // jQuery selector to add a border
                        $('row c[r*="10"]', sheet).attr( 's', '25' );
                       }
                    
                }
               
    
            ],
         "ajax": window.location.href + '/pendaftaran',
            "columns": [
                { data: 'nomor_buku_pasien' },
                { data : 'name_pasien' },
                { data : 'nomor_antrian' },
                { data : 'tujuan_poli_pasien' },
                { data : 'nomor_bpjs' }
            ]
        } );
});
   
    
   

    
    

    function merubahJumlah() {
        $("#jumlah-pasien").html(parseInt($('#jumlah-pasien-biru').html()) + parseInt($('#jumlah-pasien-pink').html()) + parseInt($('#jumlah-pasien-hijau').html()));
    }


    
        
    

    $("#btnBiru").click(function () {
        nomorAntrianBiru++;
        let warnaAntrian = 'biru';


        insertData(nomorAntrianBiru, warnaAntrian);

        $("#jumlah-pasien-biru").html(nomorAntrianBiru);

        console.log(nomorAntrianBiru);
        suaraNomorAntrian.play();

        console.log(nomorAntrianBiru + 'biru');


        setTimeout(function () {
            konvertAngka(nomorAntrianBiru);


        }, 1300);

        setTimeout(function () {
            suaraBiru.play();
        }, jedaSuara(nomorAntrianBiru));


        merubahJumlah();
    });

    $("#btnBiruUlang").click(function () {
        suaraNomorAntrian.play();


        setTimeout(function () {
            konvertAngka(nomorAntrianBiru);
        }, 1300);

        setTimeout(function () {
            suaraBiru.play();
        }, jedaSuara(nomorAntrianBiru));
    });


    $("#btnPink").click(function () {
        nomorAntrianPink++;
        let warnaAntrian = 'pink';

        

        insertData(nomorAntrianPink, warnaAntrian);



        $("#jumlah-pasien-pink").html(nomorAntrianPink);

        suaraNomorAntrian.play();


        setTimeout(function () {
            konvertAngka(nomorAntrianPink);
        }, 1300);

        setTimeout(function () {
            suaraPink.play();
        }, jedaSuara(nomorAntrianPink));

        merubahJumlah();
    });

    $("#btnPinkUlang").click(function () {
        suaraNomorAntrian.play();

        setTimeout(function () {
            konvertAngka(nomorAntrianPink);
        }, 1300);

        setTimeout(function () {
            suaraPink.play();
        }, jedaSuara(nomorAntrianPink));
    });

    $("#btnHijau").click(function () {
        nomorAntrianHijau++;

        let warnaAntrian = 'hijau';


        insertData(nomorAntrianHijau, warnaAntrian);



        $("#jumlah-pasien-hijau").html(nomorAntrianHijau);

        suaraNomorAntrian.play();


        setTimeout(function () {
            konvertAngka(nomorAntrianHijau);
        }, 1300);

        setTimeout(function () {
            suaraHijau.play();
        }, jedaSuara(nomorAntrianHijau));
        merubahJumlah();
    });

    $("#btnHijauUlang").click(function () {
        suaraNomorAntrian.play();

        setTimeout(function () {
            konvertAngka(nomorAntrianHijau);
        }, 1300);

        setTimeout(function () {
            suaraHijau.play();
        }, jedaSuara(nomorAntrianHijau));
    });

    $("#tombol-reset").click(function () {
        let confirmation = confirm("Data akan di hapus permanen.Apakah anda ingin melanjutkan?");

        if (confirmation) {
            $.ajax({
                method: "POST",
                url: window.location.href + '/' + "hapus",
                data: { 
                      _method     :     "delete"       
                 }    
              })
                .done(function( data ) {
                    alert(data.success);
                    location.reload();
                    
                      //$('#formBody').hide();
                      //$('#table-untuk-detail').show();
                      //$('#detailNamaBarang').html(data.nama_barang);
                      //$('#namaBarang').html(data.nama_barang);
                      //$('#detailJenisBarang').html(data.jenis_barang);
                      //$('#detailHargaBarang').html(data.harga_barang);
                      //$('#myModal').modal('show');   
                });
               
           }
    });

    let suara = [kosong, suara1, suara2, suara3, suara4, suara5, suara6, suara7, suara8, suara9, suara10];

    function konvertAngka(n) {
        


        if (n <= 10) {
            return suara[n].play();
            
        } else if (n == 10) { // khusus untuk sepuluh
            return suara10.play();
            
        } else if (n == 11) { // khusus untuk sebelas
            return suara11.play();
        } else if (n < 20) { // 12 -19
            return suara[(n - 10)].play() +
                setTimeout(function () { suaraBelas.play(); }, 700);

        } else if (n < 100) { // 20 -99


            return suara[(n - (n % 10)) / 10].play() +  setTimeout(function () { suaraPuluh.play(); }, 550) + setTimeout(function () { suara[(n % 10)].play(); }, 1000);

        } 
    }

    function jedaSuara(nomorAntrian) {
        let jeda = 0;

        if (nomorAntrian > 30) {
            return jeda = 3000;

        }
        else if (nomorAntrian > 20) {
            return jeda = 3000;
        }
        else if (nomorAntrian > 10 && nomorAntrian <= 20) {
            return jeda = 2500;
        }
        else {
            return jeda = 2100;
        }
    }

    function insertData(nomorAntrian, warnaAntrian) {
        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                nomorAntrian: nomorAntrian,
                warnaAntrian: warnaAntrian
            }
        })
            .done(function (data) {
                console.log(data.success);
            });
    }


    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let update;
    (update = function () {
        document.getElementById("waktu")
            .innerHTML = moment().format('dddd, Do - MMMM - YYYY, h:mm:ss') + " WITA";
    })();
    setInterval(update, 1000);
    
            /* Halaman untuk mengambil data pasien */
            $("#cariData").click(function () {
                let identitas = $("#inputIdentitas").val();
                $("#namaPasien").val("");
                $("#nomorBuku").val("");
                $("#dataKosongNotif").html("");
                
    
                $.ajax({
                    method: "GET",
                    url: "antrian/pendaftaran/" + identitas,
                    data: identitas,
                })
                    .done(function (data) {
                        console.log(data);
                        
                        $("#namaPasien").val(data.name_pasien);
                        $("#nomorBuku").val(data.nomor_buku_pasien);
                        $("#idPasien").val(data.id);
                        $("#nomorBpjs").val(data.nomor_bpjs);
                        

                        
                        if(data == 'kosong'){
                            $("#dataKosongNotif").html("Data Tidak Ditemukan");
                        }
                        
                    });
            });

            

            $("#submit-antrian-pasien").click(function () {
                //TODO Kerjakan ajax get untuk mengambil data nomorAntrianSekarang ketika di refresh

                let idPasien = $("#idPasien").val();
               
                let keluhanPasien = $("#keluhanPasien").val();
                let poliTujuan = $("#pilihanPoli").val();
                let inputNomorAntrian = nomorAntrianSekarang + " " + warnaAntrianSekarang;
                
                console.log("input"+  keluhanPasien + poliTujuan + inputNomorAntrian);
                
                $.ajax({
                    type: "POST",
                    url: "antrian/pendaftaran/post",
                    data: {
                        "_method": 'POST',
                        idPasien : idPasien,
                        keluhanPasien : keluhanPasien,
                        poliTujuan : poliTujuan,
                        nomorAntrian : inputNomorAntrian,
                    }
                })
                    .done(function (data) {
                       
                        $("#namaPasien").val("");
                        $("#nomorBuku").val("");
                        $("#idPasien").val("");
                        $("#nomorBpjs").val("");
                        $("#keluhanPasien").val("");
                        $('#tablePasienHariIni').DataTable().ajax.reload();  
                        console.log(data);
                        alert(data.success);
                        
                    })  .fail(function() {
                        alert( "error" );
                      });
            });
    
    
            $('input[name="radioJenisBerobat"]').change(function () {
                if($('#radioJenisBerobatBpjs').prop('checked')){
                    $('#formBpjs').show();
                    $('#inputBPJS').val('');
                    
                }
                else{
                    $('#formBpjs').hide();
                    $('#inputBPJS').val('kosong');
                }
            });
    
            let idPasienTerakhir = 0;
    
            $("#formDataPasienBaru").submit(function (e) {
                let namaPasien = $("#inputNama").val();
                
                
    
            e.preventDefault();
    
            let formData = new FormData(this);
            
            
            /* formData.append('namaPasien', namaPasien); */
            /* console.log(formData); */
    
            $.ajax({
                method: "POST",
                url: "pasien",
                contentType: false,
                processData: false,
                data: formData
                
            })
                .done(function (data) {
                    /* console.log(data.success);
                    console.log(data.success); */
                    alert(data.success);
                    document.getElementById("formDataPasienBaru").reset();
                    $('#print').show();
                    idPasienTerakhir = data.idPasienBaru;
                    $("#printTombol").attr("href", "pasien/print/" + idPasienTerakhir);
                    
                }) .fail(function() {
                    alert( "Data yang anda masukan tidak valid" );
                  });
                ;
            
            });

            $("#printTombol").click(function () {
                $('#print').hide();
            });

    