import React from 'react'
import './Monks_Mayhem.css'
import { CSVLink, CSVDownload } from "react-csv";


const csvData = [
    {
      RaceNumber: "96",
      CardNumbers: "8032630",
      Name: "Eddie Sanchez",
      Club: "North Crew / Shock Lab ",
      CourseClass: "30-39 Men",
      RaceTime: "00:21:09.89",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "5:53.00",
      Stage1Pos: "1",
      Stage2: "6:51.03",
      Stage2Pos: "1",
      Stage3: "1:21.17",
      Stage3Pos: "1",
      Stage4Time: "3:45.52",
      Stage4Pos: "1",
      Stage5Time: "3:19.17",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "6",
      CardNumbers: "8032609",
      Name: "Eric Klauss",
      Club: "",
      CourseClass: "30-39 Men",
      RaceTime: "00:26:03.24",
      Position: "2",
      Status: "",
      BehindTime: "+4:53.35",
      Stage1: "7:33.27",
      Stage1Pos: "3",
      Stage2: "8:59.40",
      Stage2Pos: "2",
      Stage3: "1:40.13",
      Stage3Pos: "2",
      Stage4Time: "4:09.83",
      Stage4Pos: "2",
      Stage5Time: "3:40.61",
      Stage5Pos: "2"
    },
    {
      RaceNumber: "27",
      CardNumbers: "8032615",
      Name: "Chris beversdorf",
      Club: "TACOCAT",
      CourseClass: "30-39 Men",
      RaceTime: "00:28:04.60",
      Position: "3",
      Status: "",
      BehindTime: "+6:54.71",
      Stage1: "6:46.92",
      Stage1Pos: "2",
      Stage2: "10:06.53",
      Stage2Pos: "3",
      Stage3: "2:01.22",
      Stage3Pos: "3",
      Stage4Time: "4:49.33",
      Stage4Pos: "3",
      Stage5Time: "4:20.60",
      Stage5Pos: "3"
    },
    {
      RaceNumber: "12",
      CardNumbers: "8032665",
      Name: "Mark Nevarez",
      Club: "",
      CourseClass: "40-49 Men",
      RaceTime: "00:22:08.27",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "6:03.98",
      Stage1Pos: "3",
      Stage2: "7:19.44",
      Stage2Pos: "1",
      Stage3: "1:34.13",
      Stage3Pos: "3",
      Stage4Time: "3:31.12",
      Stage4Pos: "1",
      Stage5Time: "3:39.60",
      Stage5Pos: "2"
    },
    {
      RaceNumber: "100",
      CardNumbers: "8032651",
      Name: "Octavio Gonzalez",
      Club: "EMbrace The Suck ",
      CourseClass: "40-49 Men",
      RaceTime: "00:24:11.79",
      Position: "2",
      Status: "",
      BehindTime: "+2:03.52",
      Stage1: "6:02.75",
      Stage1Pos: "2",
      Stage2: "7:27.40",
      Stage2Pos: "2",
      Stage3: "1:30.02",
      Stage3Pos: "2",
      Stage4Time: "4:26.91",
      Stage4Pos: "4",
      Stage5Time: "4:44.71",
      Stage5Pos: "5"
    },
    {
      RaceNumber: "23",
      CardNumbers: "8032649",
      Name: "Arnold Rodriguez ",
      Club: "",
      CourseClass: "40-49 Men",
      RaceTime: "00:24:41.14",
      Position: "3",
      Status: "",
      BehindTime: "+2:32.87",
      Stage1: "5:59.08",
      Stage1Pos: "1",
      Stage2: "9:25.83",
      Stage2Pos: "4",
      Stage3: "1:29.10",
      Stage3Pos: "1",
      Stage4Time: "4:13.53",
      Stage4Pos: "3",
      Stage5Time: "3:33.60",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "3",
      CardNumbers: "8032611",
      Name: "Gwenael Chiffoleae",
      Club: "",
      CourseClass: "40-49 Men",
      RaceTime: "00:25:29.94",
      Position: "4",
      Status: "",
      BehindTime: "+3:21.67",
      Stage1: "6:26.48",
      Stage1Pos: "5",
      Stage2: "9:36.98",
      Stage2Pos: "5",
      Stage3: "1:42.00",
      Stage3Pos: "4",
      Stage4Time: "3:54.58",
      Stage4Pos: "2",
      Stage5Time: "3:49.90",
      Stage5Pos: "3"
    },
    {
      RaceNumber: "44",
      CardNumbers: "8143965",
      Name: "Jason Mavromatis",
      Club: "",
      CourseClass: "40-49 Men",
      RaceTime: "00:26:02.98",
      Position: "5",
      Status: "",
      BehindTime: "+3:54.71",
      Stage1: "6:12.50",
      Stage1Pos: "4",
      Stage2: "8:29.17",
      Stage2Pos: "3",
      Stage3: "1:53.88",
      Stage3Pos: "5",
      Stage4Time: "4:52.08",
      Stage4Pos: "5",
      Stage5Time: "4:35.35",
      Stage5Pos: "4"
    },
    {
      RaceNumber: "4",
      CardNumbers: "8032613",
      Name: "Christopher Widman",
      Club: "TOCINO ",
      CourseClass: "40-49 Men",
      RaceTime: "",
      Position: "",
      Status: "DNF",
      BehindTime: "",
      Stage1: "10:40.11",
      Stage1Pos: "7",
      Stage2: "24:59.00",
      Stage2Pos: "6",
      Stage3: "",
      Stage3Pos: "",
      Stage4Time: "",
      Stage4Pos: "",
      Stage5Time: "",
      Stage5Pos: ""
    },
    {
      RaceNumber: "5",
      CardNumbers: "8032608",
      Name: "Johannes Pjede",
      Club: "The Shock Lab",
      CourseClass: "40-49 Men",
      RaceTime: "",
      Position: "",
      Status: "DNF",
      BehindTime: "",
      Stage1: "6:50.40",
      Stage1Pos: "6",
      Stage2: "",
      Stage2Pos: "",
      Stage3: "",
      Stage3Pos: "",
      Stage4Time: "",
      Stage4Pos: "",
      Stage5Time: "",
      Stage5Pos: ""
    },
    {
      RaceNumber: "52",
      CardNumbers: "8032632",
      Name: "Sergio Pacheco ",
      Club: "Zia Bello ",
      CourseClass: "50+ Men",
      RaceTime: "00:25:58.55",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "6:41.25",
      Stage1Pos: "1",
      Stage2: "8:12.00",
      Stage2Pos: "1",
      Stage3: "2:17.65",
      Stage3Pos: "1",
      Stage4Time: "4:31.00",
      Stage4Pos: "1",
      Stage5Time: "4:16.65",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "18",
      CardNumbers: "8032634",
      Name: "Brian Canales ",
      Club: "Crazy Cat",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:22:53.26",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "6:17.90",
      Stage1Pos: "3",
      Stage2: "7:37.23",
      Stage2Pos: "1",
      Stage3: "1:39.11",
      Stage3Pos: "3",
      Stage4Time: "3:49.73",
      Stage4Pos: "2",
      Stage5Time: "3:29.29",
      Stage5Pos: "2"
    },
    {
      RaceNumber: "17",
      CardNumbers: "8032618",
      Name: "Austin Rowan",
      Club: "",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:23:08.26",
      Position: "2",
      Status: "",
      BehindTime: "+0:15.00",
      Stage1: "5:29.50",
      Stage1Pos: "1",
      Stage2: "9:15.88",
      Stage2Pos: "3",
      Stage3: "1:25.78",
      Stage3Pos: "2",
      Stage4Time: "3:38.58",
      Stage4Pos: "1",
      Stage5Time: "3:18.52",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "13",
      CardNumbers: "8032614",
      Name: "Luis Gallegos ",
      Club: "",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:24:05.51",
      Position: "3",
      Status: "",
      BehindTime: "+1:12.25",
      Stage1: "6:17.78",
      Stage1Pos: "2",
      Stage2: "8:34.90",
      Stage2Pos: "2",
      Stage3: "1:24.51",
      Stage3Pos: "1",
      Stage4Time: "4:11.39",
      Stage4Pos: "4",
      Stage5Time: "3:36.93",
      Stage5Pos: "3"
    },
    {
      RaceNumber: "69",
      CardNumbers: "8032645",
      Name: "Adam Becerra ",
      Club: "Dog Speed ",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:25:28.38",
      Position: "4",
      Status: "",
      BehindTime: "+2:35.12",
      Stage1: "6:29.57",
      Stage1Pos: "4",
      Stage2: "9:17.49",
      Stage2Pos: "4",
      Stage3: "1:51.72",
      Stage3Pos: "4",
      Stage4Time: "3:53.82",
      Stage4Pos: "3",
      Stage5Time: "3:55.78",
      Stage5Pos: "4"
    },
    {
      RaceNumber: "74",
      CardNumbers: "8143968",
      Name: "Eric Estrada ",
      Club: "",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:27:50.90",
      Position: "5",
      Status: "",
      BehindTime: "+4:57.64",
      Stage1: "7:38.88",
      Stage1Pos: "5",
      Stage2: "9:28.22",
      Stage2Pos: "5",
      Stage3: "2:12.30",
      Stage3Pos: "5",
      Stage4Time: "4:29.53",
      Stage4Pos: "5",
      Stage5Time: "4:01.97",
      Stage5Pos: "5"
    },
    {
      RaceNumber: "2",
      CardNumbers: "8032644",
      Name: "Dominique Tellez ",
      Club: "",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:34:31.58",
      Position: "6",
      Status: "",
      BehindTime: "+11:38.32",
      Stage1: "8:40.48",
      Stage1Pos: "6",
      Stage2: "11:30.98",
      Stage2Pos: "6",
      Stage3: "2:28.22",
      Stage3Pos: "6",
      Stage4Time: "6:10.35",
      Stage4Pos: "6",
      Stage5Time: "5:41.55",
      Stage5Pos: "7"
    },
    {
      RaceNumber: "15",
      CardNumbers: "8032655",
      Name: "Eduardo Garcia ",
      Club: "",
      CourseClass: "Beginner Men Open ",
      RaceTime: "00:41:42.17",
      Position: "7",
      Status: "",
      BehindTime: "+18:48.91",
      Stage1: "8:41.45",
      Stage1Pos: "7",
      Stage2: "15:24.28",
      Stage2Pos: "7",
      Stage3: "3:07.00",
      Stage3Pos: "7",
      Stage4Time: "8:51.32",
      Stage4Pos: "7",
      Stage5Time: "5:38.12",
      Stage5Pos: "6"
    },
    {
      RaceNumber: "11",
      CardNumbers: "8032622",
      Name: "Antonio Acuna ",
      Club: "",
      CourseClass: "Beginner Men Open ",
      RaceTime: "",
      Position: "",
      Status: "DNF",
      BehindTime: "",
      Stage1: "11:49.85",
      Stage1Pos: "8",
      Stage2: "31:49.80",
      Stage2Pos: "8",
      Stage3: "",
      Stage3Pos: "",
      Stage4Time: "",
      Stage4Pos: "",
      Stage5Time: "",
      Stage5Pos: ""
    },
    {
      RaceNumber: "16",
      CardNumbers: "8032610",
      Name: "Jennifer Morrow",
      Club: "",
      CourseClass: "Beginner Women Open",
      RaceTime: "00:32:08.97",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "8:05.87",
      Stage1Pos: "1",
      Stage2: "10:18.70",
      Stage2Pos: "1",
      Stage3: "3:29.13",
      Stage3Pos: "2",
      Stage4Time: "5:11.45",
      Stage4Pos: "1",
      Stage5Time: "5:03.82",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "14",
      CardNumbers: "8032635",
      Name: "Michelle Mavromatis",
      Club: "",
      CourseClass: "Beginner Women Open",
      RaceTime: "00:37:25.33",
      Position: "2",
      Status: "",
      BehindTime: "+5:16.36",
      Stage1: "9:52.33",
      Stage1Pos: "2",
      Stage2: "12:20.88",
      Stage2Pos: "2",
      Stage3: "2:38.73",
      Stage3Pos: "1",
      Stage4Time: "6:18.70",
      Stage4Pos: "2",
      Stage5Time: "6:14.69",
      Stage5Pos: "2"
    },
    {
      RaceNumber: "28",
      CardNumbers: "8032623",
      Name: "Fernanda Polanco",
      Club: "Handske",
      CourseClass: "Exper Women Open",
      RaceTime: "00:25:20.41",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "6:11.70",
      Stage1Pos: "1",
      Stage2: "9:18.10",
      Stage2Pos: "1",
      Stage3: "2:05.61",
      Stage3Pos: "1",
      Stage4Time: "4:02.70",
      Stage4Pos: "1",
      Stage5Time: "3:42.30",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "1",
      CardNumbers: "8032619",
      Name: "Norma Rivera ",
      Club: "Last Sundays Ride",
      CourseClass: "Exper Women Open",
      RaceTime: "00:28:32.43",
      Position: "2",
      Status: "",
      BehindTime: "+3:12.02",
      Stage1: "6:56.96",
      Stage1Pos: "2",
      Stage2: "10:15.95",
      Stage2Pos: "2",
      Stage3: "2:22.65",
      Stage3Pos: "2",
      Stage4Time: "4:37.87",
      Stage4Pos: "2",
      Stage5Time: "4:19.00",
      Stage5Pos: "2"
    },
    {
      RaceNumber: "19",
      CardNumbers: "8032642",
      Name: "Genesis Garcia ",
      Club: "Crazy Cat",
      CourseClass: "Exper Women Open",
      RaceTime: "01:08:07.60",
      Position: "3",
      Status: "",
      BehindTime: "+42:47.19",
      Stage1: "35:50.76",
      Stage1Pos: "3",
      Stage2: "15:44.32",
      Stage2Pos: "3",
      Stage3: "3:31.19",
      Stage3Pos: "3",
      Stage4Time: "6:57.78",
      Stage4Pos: "3",
      Stage5Time: "6:03.55",
      Stage5Pos: "3"
    },
    {
      RaceNumber: "7",
      CardNumbers: "8032637",
      Name: "Eric Sotomajor",
      Club: "The Shock Lab",
      CourseClass: "Expert Men Open",
      RaceTime: "00:17:44.43",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "4:57.90",
      Stage1Pos: "1",
      Stage2: "5:50.27",
      Stage2Pos: "1",
      Stage3: "1:15.52",
      Stage3Pos: "2",
      Stage4Time: "2:50.10",
      Stage4Pos: "3",
      Stage5Time: "2:50.64",
      Stage5Pos: "4"
    },
    {
      RaceNumber: "22",
      CardNumbers: "8032654",
      Name: "Humberto Arevalo ",
      Club: "The Shock Lab",
      CourseClass: "Expert Men Open",
      RaceTime: "00:17:53.07",
      Position: "2",
      Status: "",
      BehindTime: "+0:08.64",
      Stage1: "4:59.10",
      Stage1Pos: "2",
      Stage2: "5:59.15",
      Stage2Pos: "2",
      Stage3: "1:17.11",
      Stage3Pos: "3",
      Stage4Time: "2:49.36",
      Stage4Pos: "2",
      Stage5Time: "2:48.35",
      Stage5Pos: "2"
    },
    {
      RaceNumber: "30",
      CardNumbers: "8032666",
      Name: "Corey Jones",
      Club: "",
      CourseClass: "Expert Men Open",
      RaceTime: "00:18:28.52",
      Position: "3",
      Status: "",
      BehindTime: "+0:44.09",
      Stage1: "5:09.39",
      Stage1Pos: "3",
      Stage2: "6:18.37",
      Stage2Pos: "4",
      Stage3: "1:10.75",
      Stage3Pos: "1",
      Stage4Time: "3:00.85",
      Stage4Pos: "4",
      Stage5Time: "2:49.16",
      Stage5Pos: "3"
    },
    {
      RaceNumber: "33",
      CardNumbers: "8032652",
      Name: "Edgar Ramirez",
      Club: "The Shock Lab",
      CourseClass: "Expert Men Open",
      RaceTime: "00:18:31.98",
      Position: "4",
      Status: "",
      BehindTime: "+0:47.55",
      Stage1: "5:18.02",
      Stage1Pos: "4",
      Stage2: "6:16.14",
      Stage2Pos: "3",
      Stage3: "1:25.18",
      Stage3Pos: "5",
      Stage4Time: "2:46.58",
      Stage4Pos: "1",
      Stage5Time: "2:46.06",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "21",
      CardNumbers: "8032653",
      Name: "Joel Lujan ",
      Club: "The Shock Lab ",
      CourseClass: "Expert Men Open",
      RaceTime: "00:21:09.77",
      Position: "5",
      Status: "",
      BehindTime: "+3:25.34",
      Stage1: "5:49.07",
      Stage1Pos: "5",
      Stage2: "7:08.92",
      Stage2Pos: "5",
      Stage3: "1:31.85",
      Stage3Pos: "6",
      Stage4Time: "3:29.55",
      Stage4Pos: "5",
      Stage5Time: "3:10.38",
      Stage5Pos: "5"
    },
    {
      RaceNumber: "26",
      CardNumbers: "8032647",
      Name: "Manuel Arellano ",
      Club: "The Shock Lab",
      CourseClass: "Expert Men Open",
      RaceTime: "00:21:45.78",
      Position: "6",
      Status: "",
      BehindTime: "+4:01.35",
      Stage1: "6:07.02",
      Stage1Pos: "7",
      Stage2: "7:15.94",
      Stage2Pos: "6",
      Stage3: "1:17.22",
      Stage3Pos: "4",
      Stage4Time: "3:39.13",
      Stage4Pos: "6",
      Stage5Time: "3:26.47",
      Stage5Pos: "6"
    },
    {
      RaceNumber: "9",
      CardNumbers: "8032643",
      Name: "Ricardo Granados ",
      Club: "",
      CourseClass: "Expert Men Open",
      RaceTime: "00:24:11.16",
      Position: "7",
      Status: "",
      BehindTime: "+6:26.73",
      Stage1: "6:29.56",
      Stage1Pos: "8",
      Stage2: "7:59.97",
      Stage2Pos: "8",
      Stage3: "1:47.48",
      Stage3Pos: "8",
      Stage4Time: "4:07.57",
      Stage4Pos: "7",
      Stage5Time: "3:46.58",
      Stage5Pos: "7"
    },
    {
      RaceNumber: "20",
      CardNumbers: "8032648",
      Name: "Luis Arturo Encerrado ",
      Club: "Handske ",
      CourseClass: "Expert Men Open",
      RaceTime: "00:24:27.55",
      Position: "8",
      Status: "",
      BehindTime: "+6:43.12",
      Stage1: "5:55.02",
      Stage1Pos: "6",
      Stage2: "7:31.25",
      Stage2Pos: "7",
      Stage3: "1:46.50",
      Stage3Pos: "7",
      Stage4Time: "5:21.95",
      Stage4Pos: "8",
      Stage5Time: "3:52.83",
      Stage5Pos: "8"
    },
    {
      RaceNumber: "101",
      CardNumbers: "8032668",
      Name: "Rob Rough Rider",
      Club: "",
      CourseClass: "Expert Men Open",
      RaceTime: "01:13:34.04",
      Position: "",
      Status: "",
      BehindTime: "",
      Stage1: "53:41.68",
      Stage1Pos: "",
      Stage2: "10:08.26",
      Stage2Pos: "",
      Stage3: "1:57.84",
      Stage3Pos: "",
      Stage4Time: "3:52.58",
      Stage4Pos: "",
      Stage5Time: "3:53.68",
      Stage5Pos: ""
    },
    {
      RaceNumber: "34",
      CardNumbers: "8032674",
      Name: "Wyatt Ivey ",
      Club: "Crazy cat ",
      CourseClass: "JR MEN- 5 spots",
      RaceTime: "00:24:32.58",
      Position: "1",
      Status: "",
      BehindTime: "",
      Stage1: "6:05.37",
      Stage1Pos: "1",
      Stage2: "9:01.61",
      Stage2Pos: "1",
      Stage3: "1:42.19",
      Stage3Pos: "1",
      Stage4Time: "3:51.01",
      Stage4Pos: "1",
      Stage5Time: "3:52.40",
      Stage5Pos: "1"
    },
    {
      RaceNumber: "29",
      CardNumbers: "8032625",
      Name: "Alex Arellano ",
      Club: "The Shock Lab ",
      CourseClass: "JR MEN- 5 spots",
      RaceTime: "00:26:43.52",
      Position: "2",
      Status: "",
      BehindTime: "+2:10.94",
      Stage1: "6:27.50",
      Stage1Pos: "2",
      Stage2: "9:31.41",
      Stage2Pos: "2",
      Stage3: "1:58.88",
      Stage3Pos: "2",
      Stage4Time: "4:51.48",
      Stage4Pos: "2",
      Stage5Time: "3:54.25",
      Stage5Pos: "2"
    }
  ]

export default function Monks_Mayhem() {
    
    
   
    
    
    
    
    
    
    
    return (
        <div className='background-monks'>
        
        <div className="monks-mayhem">
              
        <div className='container'>
            <h1 className='gold-0'>Monks Mayhem</h1>
            
            
            <table class="tableizer-table">
                    <thead><tr class="tableizer-firstrow"><th>RaceNumber</th><th>CardNumber</th><th>Name</th><th>Club</th><th>Class</th><th>Total Race Time</th><th>Position</th><th>Status</th><th>BehindTime</th><th>S1-Monks Mayhem Time</th><th>S1-Monks Mayhem Pos</th><th>S2-Anna's Dominatrix Time</th><th>S2-Anna's Dominatrix Pos</th><th>S3-Black Cat Time</th><th>S3-Black Cat Pos</th><th>S4-Hiss & Claw Time</th><th>S4-Hiss & Claw Pos</th><th>S5-Vertigo Time</th><th>S5-Vertigo Pos</th></tr></thead><tbody>
                    <tr><td>96</td><td>8032630</td><td>Eddie Sanchez</td><td>North Crew / Shock Lab </td><td>30-39 Men</td><td>21:09.9</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>05:53.0</td><td>1</td><td>06:51.0</td><td>1</td><td>01:21.2</td><td>1</td><td>03:45.5</td><td>1</td><td>03:19.2</td><td>1</td></tr>
                    <tr><td>6</td><td>8032609</td><td>Eric Klauss</td><td>&nbsp;</td><td>30-39 Men</td><td>26:03.2</td><td>2</td><td>&nbsp;</td><td>+4:53.35</td><td>07:33.3</td><td>3</td><td>08:59.4</td><td>2</td><td>01:40.1</td><td>2</td><td>04:09.8</td><td>2</td><td>03:40.6</td><td>2</td></tr>
                    <tr><td>27</td><td>8032615</td><td>Chris beversdorf</td><td>TACOCAT</td><td>30-39 Men</td><td>28:04.6</td><td>3</td><td>&nbsp;</td><td>+6:54.71</td><td>06:46.9</td><td>2</td><td>10:06.5</td><td>3</td><td>02:01.2</td><td>3</td><td>04:49.3</td><td>3</td><td>04:20.6</td><td>3</td></tr>
                    <tr><td>12</td><td>8032665</td><td>Mark Nevarez</td><td>&nbsp;</td><td>40-49 Men</td><td>22:08.3</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>06:04.0</td><td>3</td><td>07:19.4</td><td>1</td><td>01:34.1</td><td>3</td><td>03:31.1</td><td>1</td><td>03:39.6</td><td>2</td></tr>
                    <tr><td>100</td><td>8032651</td><td>Octavio Gonzalez</td><td>EMbrace The Suck </td><td>40-49 Men</td><td>24:11.8</td><td>2</td><td>&nbsp;</td><td>+2:03.52</td><td>06:02.8</td><td>2</td><td>07:27.4</td><td>2</td><td>01:30.0</td><td>2</td><td>04:26.9</td><td>4</td><td>04:44.7</td><td>5</td></tr>
                    <tr><td>23</td><td>8032649</td><td>Arnold Rodriguez </td><td>&nbsp;</td><td>40-49 Men</td><td>24:41.1</td><td>3</td><td>&nbsp;</td><td>+2:32.87</td><td>05:59.1</td><td>1</td><td>09:25.8</td><td>4</td><td>01:29.1</td><td>1</td><td>04:13.5</td><td>3</td><td>03:33.6</td><td>1</td></tr>
                    <tr><td>3</td><td>8032611</td><td>Gwenael Chiffoleae</td><td>&nbsp;</td><td>40-49 Men</td><td>25:29.9</td><td>4</td><td>&nbsp;</td><td>+3:21.67</td><td>06:26.5</td><td>5</td><td>09:37.0</td><td>5</td><td>01:42.0</td><td>4</td><td>03:54.6</td><td>2</td><td>03:49.9</td><td>3</td></tr>
                    <tr><td>44</td><td>8143965</td><td>Jason Mavromatis</td><td>&nbsp;</td><td>40-49 Men</td><td>26:03.0</td><td>5</td><td>&nbsp;</td><td>+3:54.71</td><td>06:12.5</td><td>4</td><td>08:29.2</td><td>3</td><td>01:53.9</td><td>5</td><td>04:52.1</td><td>5</td><td>04:35.3</td><td>4</td></tr>
                    <tr><td>4</td><td>8032613</td><td>Christopher Widman</td><td>TOCINO </td><td>40-49 Men</td><td>&nbsp;</td><td>&nbsp;</td><td>DNF</td><td>&nbsp;</td><td>10:40.1</td><td>7</td><td>24:59.0</td><td>6</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                    <tr><td>5</td><td>8032608</td><td>Johannes Pjede</td><td>The Shock Lab</td><td>40-49 Men</td><td>&nbsp;</td><td>&nbsp;</td><td>DNF</td><td>&nbsp;</td><td>06:50.4</td><td>6</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                    <tr><td>52</td><td>8032632</td><td>Sergio Pacheco </td><td>Zia Bello </td><td>50+ Men</td><td>25:58.5</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>06:41.3</td><td>1</td><td>08:12.0</td><td>1</td><td>02:17.7</td><td>1</td><td>04:31.0</td><td>1</td><td>04:16.6</td><td>1</td></tr>
                    <tr><td>18</td><td>8032634</td><td>Brian Canales </td><td>Crazy Cat</td><td>Beginner Men Open </td><td>22:53.3</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>06:17.9</td><td>3</td><td>07:37.2</td><td>1</td><td>01:39.1</td><td>3</td><td>03:49.7</td><td>2</td><td>03:29.3</td><td>2</td></tr>
                    <tr><td>17</td><td>8032618</td><td>Austin Rowan</td><td>&nbsp;</td><td>Beginner Men Open </td><td>23:08.3</td><td>2</td><td>&nbsp;</td><td>+0:15.00</td><td>05:29.5</td><td>1</td><td>09:15.9</td><td>3</td><td>01:25.8</td><td>2</td><td>03:38.6</td><td>1</td><td>03:18.5</td><td>1</td></tr>
                    <tr><td>13</td><td>8032614</td><td>Luis Gallegos </td><td>&nbsp;</td><td>Beginner Men Open </td><td>24:05.5</td><td>3</td><td>&nbsp;</td><td>+1:12.25</td><td>06:17.8</td><td>2</td><td>08:34.9</td><td>2</td><td>01:24.5</td><td>1</td><td>04:11.4</td><td>4</td><td>03:36.9</td><td>3</td></tr>
                    <tr><td>69</td><td>8032645</td><td>Adam Bacerra </td><td>Dog Speed </td><td>Beginner Men Open </td><td>25:28.4</td><td>4</td><td>&nbsp;</td><td>+2:35.12</td><td>06:29.6</td><td>4</td><td>09:17.5</td><td>4</td><td>01:51.7</td><td>4</td><td>03:53.8</td><td>3</td><td>03:55.8</td><td>4</td></tr>
                    <tr><td>74</td><td>8143968</td><td>Eric Estrada </td><td>&nbsp;</td><td>Beginner Men Open </td><td>27:50.9</td><td>5</td><td>&nbsp;</td><td>+4:57.64</td><td>07:38.9</td><td>5</td><td>09:28.2</td><td>5</td><td>02:12.3</td><td>5</td><td>04:29.5</td><td>5</td><td>04:02.0</td><td>5</td></tr>
                    <tr><td>2</td><td>8032644</td><td>Dominique Tellez </td><td>&nbsp;</td><td>Beginner Men Open </td><td>34:31.6</td><td>6</td><td>&nbsp;</td><td>+11:38.32</td><td>08:40.5</td><td>6</td><td>11:31.0</td><td>6</td><td>02:28.2</td><td>6</td><td>06:10.4</td><td>6</td><td>05:41.6</td><td>7</td></tr>
                    <tr><td>15</td><td>8032655</td><td>Eduardo Garcia </td><td>&nbsp;</td><td>Beginner Men Open </td><td>41:42.2</td><td>7</td><td>&nbsp;</td><td>+18:48.91</td><td>08:41.5</td><td>7</td><td>15:24.3</td><td>7</td><td>03:07.0</td><td>7</td><td>08:51.3</td><td>7</td><td>05:38.1</td><td>6</td></tr>
                    <tr><td>11</td><td>8032622</td><td>Antonio Acuna </td><td>&nbsp;</td><td>Beginner Men Open </td><td>&nbsp;</td><td>&nbsp;</td><td>DNF</td><td>&nbsp;</td><td>11:49.9</td><td>8</td><td>31:49.8</td><td>8</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                    <tr><td>16</td><td>8032610</td><td>Jennifer Morrow</td><td>&nbsp;</td><td>Beginner Women Open</td><td>32:09.0</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>08:05.9</td><td>1</td><td>10:18.7</td><td>1</td><td>03:29.1</td><td>2</td><td>05:11.4</td><td>1</td><td>05:03.8</td><td>1</td></tr>
                    <tr><td>14</td><td>8032635</td><td>Michelle Mavromatis</td><td>&nbsp;</td><td>Beginner Women Open</td><td>37:25.3</td><td>2</td><td>&nbsp;</td><td>+5:16.36</td><td>09:52.3</td><td>2</td><td>12:20.9</td><td>2</td><td>02:38.7</td><td>1</td><td>06:18.7</td><td>2</td><td>06:14.7</td><td>2</td></tr>
                    <tr><td>28</td><td>8032623</td><td>Fernanda Polanco</td><td>Handske</td><td>Expert Women Open</td><td>25:20.4</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>06:11.7</td><td>1</td><td>09:18.1</td><td>1</td><td>02:05.6</td><td>1</td><td>04:02.7</td><td>1</td><td>03:42.3</td><td>1</td></tr>
                    <tr><td>1</td><td>8032619</td><td>Norma Rivera </td><td>Last Sundays Ride</td><td>Expert Women Open</td><td>28:32.4</td><td>2</td><td>&nbsp;</td><td>+3:12.02</td><td>06:57.0</td><td>2</td><td>10:15.9</td><td>2</td><td>02:22.7</td><td>2</td><td>04:37.9</td><td>2</td><td>04:19.0</td><td>2</td></tr>
                    <tr><td>19</td><td>8032642</td><td>Genesis Garcia </td><td>Crazy Cat</td><td>Expert Women Open</td><td>08:07.6</td><td>3</td><td>&nbsp;</td><td>+42:47.19</td><td>35:50.8</td><td>3</td><td>15:44.3</td><td>3</td><td>03:31.2</td><td>3</td><td>06:57.8</td><td>3</td><td>06:03.6</td><td>3</td></tr>
                    <tr><td>7</td><td>8032637</td><td>Eric Sotomajor</td><td>The Shock Lab</td><td>Expert Men Open</td><td>17:44.4</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>04:57.9</td><td>1</td><td>05:50.3</td><td>1</td><td>01:15.5</td><td>2</td><td>02:50.1</td><td>3</td><td>02:50.6</td><td>4</td></tr>
                    <tr><td>22</td><td>8032654</td><td>Humberto Arevalo </td><td>The Shock Lab</td><td>Expert Men Open</td><td>17:53.1</td><td>2</td><td>&nbsp;</td><td>+0:08.64</td><td>04:59.1</td><td>2</td><td>05:59.2</td><td>2</td><td>01:17.1</td><td>3</td><td>02:49.4</td><td>2</td><td>02:48.3</td><td>2</td></tr>
                    <tr><td>30</td><td>8032666</td><td>Corey Jones</td><td>&nbsp;</td><td>Expert Men Open</td><td>18:28.5</td><td>3</td><td>&nbsp;</td><td>+0:44.09</td><td>05:09.4</td><td>3</td><td>06:18.4</td><td>4</td><td>01:10.7</td><td>1</td><td>03:00.9</td><td>4</td><td>02:49.2</td><td>3</td></tr>
                    <tr><td>33</td><td>8032652</td><td>Edgar Ramirez</td><td>The Shock Lab</td><td>Expert Men Open</td><td>18:32.0</td><td>4</td><td>&nbsp;</td><td>+0:47.55</td><td>05:18.0</td><td>4</td><td>06:16.1</td><td>3</td><td>01:25.2</td><td>5</td><td>02:46.6</td><td>1</td><td>02:46.1</td><td>1</td></tr>
                    <tr><td>21</td><td>8032653</td><td>Joel Lujan </td><td>The Shock Lab </td><td>Expert Men Open</td><td>21:09.8</td><td>5</td><td>&nbsp;</td><td>+3:25.34</td><td>05:49.1</td><td>5</td><td>07:08.9</td><td>5</td><td>01:31.9</td><td>6</td><td>03:29.6</td><td>5</td><td>03:10.4</td><td>5</td></tr>
                    <tr><td>26</td><td>8032647</td><td>Manuel Arellano </td><td>The Shock Lab</td><td>Expert Men Open</td><td>21:45.8</td><td>6</td><td>&nbsp;</td><td>+4:01.35</td><td>06:07.0</td><td>7</td><td>07:15.9</td><td>6</td><td>01:17.2</td><td>4</td><td>03:39.1</td><td>6</td><td>03:26.5</td><td>6</td></tr>
                    <tr><td>9</td><td>8032643</td><td>Ricardo Granados </td><td>&nbsp;</td><td>Expert Men Open</td><td>24:11.2</td><td>7</td><td>&nbsp;</td><td>+6:26.73</td><td>06:29.6</td><td>8</td><td>08:00.0</td><td>8</td><td>01:47.5</td><td>8</td><td>04:07.6</td><td>7</td><td>03:46.6</td><td>7</td></tr>
                    <tr><td>20</td><td>8032648</td><td>Luis Arturo Encerrado </td><td>Handske </td><td>Expert Men Open</td><td>24:27.6</td><td>8</td><td>&nbsp;</td><td>+6:43.12</td><td>05:55.0</td><td>6</td><td>07:31.3</td><td>7</td><td>01:46.5</td><td>7</td><td>05:21.9</td><td>8</td><td>03:52.8</td><td>8</td></tr>
                    <tr><td>101</td><td>8032668</td><td>Rob Rough Rider</td><td>&nbsp;</td><td>Expert Men Open</td><td>13:34.0</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>53:41.7</td><td>&nbsp;</td><td>10:08.3</td><td>&nbsp;</td><td>01:57.8</td><td>&nbsp;</td><td>03:52.6</td><td>&nbsp;</td><td>03:53.7</td><td>&nbsp;</td></tr>
                    <tr><td>34</td><td>8032674</td><td>Wyatt Ivey </td><td>Crazy Cat </td><td>JR MEN- 5 spots</td><td>24:32.6</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>06:05.4</td><td>1</td><td>09:01.6</td><td>1</td><td>01:42.2</td><td>1</td><td>03:51.0</td><td>1</td><td>03:52.4</td><td>1</td></tr>
                    <tr><td>29</td><td>8032625</td><td>Alex Arellano </td><td>The Shock Lab </td><td>JR MEN- 5 spots</td><td>26:43.5</td><td>2</td><td>&nbsp;</td><td>+2:10.94</td><td>06:27.5</td><td>2</td><td>09:31.4</td><td>2</td><td>01:58.9</td><td>2</td><td>04:51.5</td><td>2</td><td>03:54.2</td><td>2</td></tr>
            </tbody></table>
            <CSVLink className="downloadLink" data={csvData}>Download Results</CSVLink>;
            </div>
        </div>
    </div>
    )
}
