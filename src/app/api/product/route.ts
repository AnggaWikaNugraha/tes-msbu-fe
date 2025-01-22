import { NextResponse } from 'next/server';

export async function POST() {

    // Validasi email dan password
    return NextResponse.json(
        {
            "status": 200,
            "error": false,
            "message": "success",
            "meta": {
                "item_count": 35162,
                "page": {
                    "is_cursor": false,
                    "current": 1,
                    "previous": 0,
                    "next": 2,
                    "limit": 10,
                    "total": 10
                },
                "sort": null,
                "param": null,
                "data": [
                    {
                        "kfa_code": "33000002",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": true,
                        "discontinued": false,
                        "display_name": "Hematology analyzer instrument/unit 3 diff (SYSMEX, XP-100)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 81082633,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000002",
                                "name": "Hematology Analyzer Instrument/Unit 3 Diff",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20205310017",
                                "name": "SYSMEX XP-100 Automated Hematology Analyzer  and Accessories",
                                "use": "usual",
                                "end_date": "2026-01-28",
                                "start_date": "2020-07-17",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/1370769?lang=id&type=province",
                                "code": "1370769",
                                "name": "Automated Hematology Analyzer XP 100 and Accessories include Peripherals",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2021-09-14",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "4815010999",
                        "kode_lkpp": "1370769",
                        "manufacturer": "SYSMEX CORPORATION.",
                        "manufacturer_country": {
                            "code": "JP",
                            "name": "Japan"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "SYSMEX XP-100 Automated Hematology Analyzer  and Accessories",
                        "nie": "AKL 20205310017",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000009",
                            "name": "Hematology analyzer instrument/unit 3 diff",
                            "bmhp": false,
                            "synonyms": "Hematology analyzer 3 diff"
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. SYSMEX INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 30.29,
                        "score_tkdn_bmp": 30.29,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002003",
                            "name": "Hematology Analyzer"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-05-07T03:41:04.789Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000003",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": false,
                        "discontinued": false,
                        "display_name": "Hematology analyzer instrument/unit 3 diff (SYSMEX, XP-300)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": -1,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000003",
                                "name": "Hematology Analyzer Instrument/Unit 3 Diff",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 10204420100",
                                "name": "GENEXUS Dx  Reagents",
                                "use": "usual",
                                "end_date": "2028-11-23",
                                "start_date": "2024-05-21",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": null,
                                "code": "AKL 20205310720",
                                "name": "SYSMEX XP-300 Automated Hematology Analyzer and Accessories",
                                "use": "usual",
                                "end_date": "2026-01-28",
                                "start_date": "2020-07-21",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "",
                        "kode_lkpp": "",
                        "manufacturer": "",
                        "manufacturer_country": {
                            "code": "",
                            "name": ""
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "SYSMEX XP-300 Automated Hematology Analyzer and Accessories",
                        "nie": "",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000009",
                            "name": "Hematology analyzer instrument/unit 3 diff",
                            "bmhp": false,
                            "synonyms": "Hematology analyzer 3 diff"
                        },
                        "produksi_buatan": "import",
                        "registrar": "",
                        "registrar_country": {
                            "code": "",
                            "name": ""
                        },
                        "score_bmp": -1,
                        "score_tkdn": -1,
                        "score_tkdn_bmp": 0,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002003",
                            "name": "Hematology Analyzer"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": false,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-12-17T09:25:50.766Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000004",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": false,
                        "discontinued": false,
                        "display_name": "Hematology analyzer instrument/unit 3 diff (POCH-100I, SYSMEX)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 119965878,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000004",
                                "name": "Hematology Analyzer Instrument/Unit 3 Diff",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20205805642",
                                "name": "SYSMEX POCH-100i Automated Hematology Analyzer and Accessories",
                                "use": "usual",
                                "end_date": "2026-01-28",
                                "start_date": "2020-03-17",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/1393164?lang=id&type=province",
                                "code": "1393164",
                                "name": "Automated Hematology Analyzer PocH-100i  and Accessories include Peripherals",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2021-09-14",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "4815000187",
                        "kode_lkpp": "1393164",
                        "manufacturer": "SYSMEX CORPORATION.",
                        "manufacturer_country": {
                            "code": "JP",
                            "name": "Japan"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "SYSMEX POCH-100i Automated Hematology Analyzer and Accessories",
                        "nie": "AKL 20205805642",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000009",
                            "name": "Hematology analyzer instrument/unit 3 diff",
                            "bmhp": false,
                            "synonyms": "Hematology analyzer 3 diff"
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. SYSMEX INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 30.29,
                        "score_tkdn_bmp": 30.29,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002003",
                            "name": "Hematology Analyzer"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-05-07T03:44:53.102Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000006",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": false,
                        "discontinued": false,
                        "display_name": "CD4 Counter Instrument/Unit (CYFLOW, SYSMEX)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 349873078,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000006",
                                "name": "CD4 Counter Instrument/Unit",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20205915342",
                                "name": "CYFLOW[register] Counter",
                                "use": "usual",
                                "end_date": "2026-02-09",
                                "start_date": "2020-08-19",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/1405363?lang=id&type=province",
                                "code": "1405363",
                                "name": "CD4 and CD4% Analyzer Cyflow Counter",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2021-09-14",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "4815000187",
                        "kode_lkpp": "1405363",
                        "manufacturer": "SYSMEX PARTEC GMBH",
                        "manufacturer_country": {
                            "code": "DE",
                            "name": "Germany"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "CYFLOW[register] Counter",
                        "nie": "AKL 20205915342",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000013",
                            "name": "CD4 Counter Instrument/Unit",
                            "bmhp": false,
                            "synonyms": ""
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. SYSMEX INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 0,
                        "score_tkdn_bmp": 0,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002001",
                            "name": "CD4 Counter"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-05-07T04:01:12.995Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000007",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": true,
                        "discontinued": false,
                        "display_name": "Holmium laser system (AURIGA XL, M0068FS4007G0)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 1563374000,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000007",
                                "name": "Holmium Laser System",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 21603716980",
                                "name": "AURIGA XL 4007 Laser System",
                                "use": "usual",
                                "end_date": "2027-04-20",
                                "start_date": "2019-04-02",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/1371991?lang=id&type=province",
                                "code": "1371991",
                                "name": "AURIGA XL 4007 Laser System",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2021-09-14",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "1603033",
                            "name": "Laser surgical instrument for use in general and plastic surgery and in dermatology"
                        },
                        "kategori": {
                            "code": "16",
                            "name": "Peralatan Bedah Umum dan Bedah Plastik"
                        },
                        "klasifikasi_izin": {
                            "code": "ENR",
                            "name": "Elektromedik Non Radiasi",
                            "type": "device"
                        },
                        "kode_kbki": "4815000284",
                        "kode_lkpp": "1371991",
                        "manufacturer": "BOSTON SCIENTIFIC CORPORATION.",
                        "manufacturer_country": {
                            "code": "US",
                            "name": "United States"
                        },
                        "med_dev_kelas_risiko": "C",
                        "nama_dagang": "AURIGA XL 4007 Laser System",
                        "nie": "AKL 21603716980",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32002844",
                            "name": "Holmium laser system",
                            "bmhp": false,
                            "synonyms": ""
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. BOSTON SCIENTIFIC INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 0,
                        "score_tkdn_bmp": 0,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "1603033001",
                            "name": "Laser For Use In General"
                        },
                        "sub_kategori": {
                            "code": "1603",
                            "name": "Peralatan Bedah"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-09-24T09:49:00.257Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000008",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": false,
                        "discontinued": false,
                        "display_name": "Hematology Analyzer Reagent Kit 5 Diff (CELLPACK DCL, SYSMEX)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": -1,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000008",
                                "name": "Hematology Analyzer Reagent Kit 5 Diff",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 10204420100",
                                "name": "GENEXUS Dx  Reagents",
                                "use": "usual",
                                "end_date": "2028-11-23",
                                "start_date": "2024-05-21",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": null,
                                "code": "AKL 20208912298",
                                "name": "CELLPACK[register] DCL",
                                "use": "usual",
                                "end_date": "2024-09-20",
                                "start_date": "2019-12-30",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "",
                        "kode_lkpp": "",
                        "manufacturer": "",
                        "manufacturer_country": {
                            "code": "",
                            "name": ""
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "CELLPACK[register] DCL",
                        "nie": "",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000011",
                            "name": "Hematology Analyzer Reagent Kit 5 Diff",
                            "bmhp": false,
                            "synonyms": ""
                        },
                        "produksi_buatan": "import",
                        "registrar": "",
                        "registrar_country": {
                            "code": "",
                            "name": ""
                        },
                        "score_bmp": -1,
                        "score_tkdn": -1,
                        "score_tkdn_bmp": 0,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002003",
                            "name": "Hematology Analyzer"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": false,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Kit",
                        "updated_at": "2024-12-17T10:17:48.336Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000010",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": true,
                        "discontinued": false,
                        "display_name": "Coronary Intravascular Ultrasound Catheter 60 MHz High definition (H74939352020, OPTICROSS HD)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 19250000,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000010",
                                "name": "Coronary Intravascular Ultrasound Catheter 60 MHz High definition",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20501816508",
                                "name": "OPTICROSS HD 60 MHz Coronary Imaging Catheter",
                                "use": "usual",
                                "end_date": "2027-01-20",
                                "start_date": "2018-09-18",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/2444916?lang=id&type=province",
                                "code": "2444916",
                                "name": "OPTICROSS HD 60 MHz Coronary Imaging Catheter with Pullback Sled IVUS HD Imaging Catheter 60 MHz",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2022-07-27",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "1603005",
                            "name": "Surgical apparel "
                        },
                        "kategori": {
                            "code": "16",
                            "name": "Peralatan Bedah Umum dan Bedah Plastik"
                        },
                        "klasifikasi_izin": {
                            "code": "NES",
                            "name": "Non Elektromedik Steril",
                            "type": "device"
                        },
                        "kode_kbki": "4815000007",
                        "kode_lkpp": "2444916",
                        "manufacturer": "BOSTON SCIENTIFIC CORPORATION",
                        "manufacturer_country": {
                            "code": "CR",
                            "name": "Costa Rica"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "OPTICROSS HD 60 MHz Coronary Imaging Catheter",
                        "nie": "AKL 20501816508",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000703",
                            "name": "Coronary Intravascular Ultrasound Catheter 60 MHz High definition",
                            "bmhp": true,
                            "synonyms": "Catheter Jantung"
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. BOSTON SCIENTIFIC INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 0,
                        "score_tkdn_bmp": 0,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "1603005003",
                            "name": "Coverall Steril"
                        },
                        "sub_kategori": {
                            "code": "1603",
                            "name": "Peralatan Bedah"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-06-03T10:16:20.842Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000011",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": true,
                        "discontinued": false,
                        "display_name": "Coronary Intravascular Ultrasound Catheter 60 MHz High definition (H74939352030, OPTICROSS HD)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 19250000,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000011",
                                "name": "Coronary Intravascular Ultrasound Catheter 60 MHz High definition",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20501816508",
                                "name": "OPTICROSS HD 60 MHz Coronary Imaging Catheter",
                                "use": "usual",
                                "end_date": "2027-01-20",
                                "start_date": "2018-09-18",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/2444916?lang=id&type=province",
                                "code": "2444916",
                                "name": "OPTICROSS HD 60 MHz Coronary Imaging Catheter with Pullback Sled IVUS HD Imaging Catheter 60 MHz",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2022-07-27",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "1603005",
                            "name": "Surgical apparel "
                        },
                        "kategori": {
                            "code": "16",
                            "name": "Peralatan Bedah Umum dan Bedah Plastik"
                        },
                        "klasifikasi_izin": {
                            "code": "NES",
                            "name": "Non Elektromedik Steril",
                            "type": "device"
                        },
                        "kode_kbki": "4815000007",
                        "kode_lkpp": "2444916",
                        "manufacturer": "BOSTON SCIENTIFIC CORPORATION",
                        "manufacturer_country": {
                            "code": "CR",
                            "name": "Costa Rica"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "OPTICROSS[tradermark] HD 60 MHz Coronary Imaging Catheter",
                        "nie": "AKL 20501816508",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000703",
                            "name": "Coronary Intravascular Ultrasound Catheter 60 MHz High definition",
                            "bmhp": true,
                            "synonyms": "Catheter Jantung"
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. BOSTON SCIENTIFIC INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 0,
                        "score_tkdn_bmp": 0,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "1603005003",
                            "name": "Coverall Steril"
                        },
                        "sub_kategori": {
                            "code": "1603",
                            "name": "Peralatan Bedah"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-05-30T09:34:57.924Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000012",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": false,
                        "discontinued": false,
                        "display_name": "Hematology analyzer instrument/unit 5 diff (SYSMEX, XN-330)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 203703617,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000012",
                                "name": "Hematology Analyzer Instrument/Unit 5 Diff",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20205614863",
                                "name": "SYSMEX Automated Hematology Analyzer XN-L Series X",
                                "use": "usual",
                                "end_date": "2028-01-16",
                                "start_date": "2020-10-08",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/1370884?lang=id&type=province",
                                "code": "1370884",
                                "name": "Automated Hematology Analyser XN-330 License and Accessories include Peripherals",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2021-09-14",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "4815010999",
                        "kode_lkpp": "1370884",
                        "manufacturer": "SYSMEX CORPORATION.",
                        "manufacturer_country": {
                            "code": "JP",
                            "name": "Japan"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "SYSMEX Automated Hematology Analyzer XN-L Series XN-330 and Accessories",
                        "nie": "AKL 20205614863",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000012",
                            "name": "Hematology analyzer instrument/unit 5 diff",
                            "bmhp": false,
                            "synonyms": ""
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. SYSMEX INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 30.29,
                        "score_tkdn_bmp": 30.29,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002003",
                            "name": "Hematology Analyzer"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-05-07T04:17:54.757Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    },
                    {
                        "kfa_code": "33000013",
                        "active": true,
                        "barcode": "",
                        "dapat_dibeli_lkpp": false,
                        "discontinued": false,
                        "display_name": "Hematology analyzer instrument/unit 5 diff (SYSMEX, XN-450)",
                        "farmalkes_type": {
                            "code": "device",
                            "name": "device",
                            "group": "alkes"
                        },
                        "fix_price": 275729556,
                        "fornas": false,
                        "identifier_ids": [
                            {
                                "url": null,
                                "code": "33000013",
                                "name": "Hematology Analyzer Instrument/Unit 5 Diff",
                                "use": "official",
                                "end_date": null,
                                "start_date": null,
                                "source_code": "kemkes_ihs",
                                "source_name": "Kamus Farmalkes (KFA – IHS)"
                            },
                            {
                                "url": null,
                                "code": "AKL 20205515108",
                                "name": "SYSMEX Automated Hematology Analyzer XN-L Series, ",
                                "use": "usual",
                                "end_date": "2028-01-16",
                                "start_date": "2019-10-07",
                                "source_code": "nie_regalkes",
                                "source_name": "NIE REGALKES"
                            },
                            {
                                "url": "https://e-katalog.lkpp.go.id/katalog/produk/detail/1371585?lang=id&type=province",
                                "code": "1371585",
                                "name": "Automated Hematology Analyser XN-450 License and Accessories include Peripherals",
                                "use": "usual",
                                "end_date": null,
                                "start_date": "2021-09-14",
                                "source_code": "produk_lkpp",
                                "source_name": "LKPP"
                            }
                        ],
                        "jenis": {
                            "code": "0205002",
                            "name": "Automated differential cell counter."
                        },
                        "kategori": {
                            "code": "02",
                            "name": "Peralatan Hematologi dan Patologi"
                        },
                        "klasifikasi_izin": {
                            "code": "ID",
                            "name": "Invitro Diagnostik",
                            "type": "device"
                        },
                        "kode_kbki": "4815010999",
                        "kode_lkpp": "1371585",
                        "manufacturer": "SYSMEX CORPORATION.",
                        "manufacturer_country": {
                            "code": "JP",
                            "name": "Japan"
                        },
                        "med_dev_kelas_risiko": "B",
                        "nama_dagang": "SYSMEX Automated Hematology Analyzer XN-L Series, XN-450 and Accessories",
                        "nie": "AKL 20205515108",
                        "product_template": {
                            "state": "valid",
                            "kfa_code": "32000012",
                            "name": "Hematology analyzer instrument/unit 5 diff",
                            "bmhp": false,
                            "synonyms": ""
                        },
                        "produksi_buatan": "import",
                        "registrar": "PT. SYSMEX INDONESIA",
                        "registrar_country": {
                            "code": "ID",
                            "name": "Indonesia"
                        },
                        "score_bmp": 0,
                        "score_tkdn": 30.29,
                        "score_tkdn_bmp": 30.29,
                        "stok_wajib_yankes": false,
                        "sub_jenis": {
                            "code": "0205002003",
                            "name": "Hematology Analyzer"
                        },
                        "sub_kategori": {
                            "code": "0205",
                            "name": "Peralatan Hematologi Otomatis dan Semi Otomatis"
                        },
                        "tayang_lkpp": true,
                        "ucum": {
                            "name": "internasional unit",
                            "ci_code": "[IU]",
                            "cs_code": "[IU]"
                        },
                        "uom_name": "Units",
                        "uom_po_name": "Units",
                        "updated_at": "2024-05-07T04:20:23.813Z",
                        "variant_desc_farmalkes": "<p><br></p>",
                        "variant_desc_usage": "<p><br></p>",
                        "variant_desc_warning": "<p><br></p>",
                        "variant_side_effect": "<p><br></p>",
                        "volume": -1,
                        "weight": -1,
                        "product_state": "valid",
                        "replacement": {
                            "product": {
                                "reason": "",
                                "kfa_code": ""
                            },
                            "template": {
                                "reason": "",
                                "kfa_code": ""
                            }
                        }
                    }
                ]
            }
        }
    );
}