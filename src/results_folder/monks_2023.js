import React from 'react'
import './monks_2022.css'
import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  {
    "RaceNumber": 7,
    "CardNumbers": 8032676,
    "Name": "Jose Reyes",
    "Club": "",
    "CourseClass": "eBike Open",
    "StartTime": "54:33.9",
    "FinishTime": "28:46.8",
    "RaceTime": "21:13.8",
    "NonCompetitive": "Y",
    "Position": 1,
    "JourneyTime": "34:12.9",
    "ExcludedExcess": "",
    "BehindTime": "",
    "Stage 1 - Monks Time": "02:24.4",
    "Stage 1 - Monks Pos": 1,
    "Stage 2 - Anna's Plunge Time": "01:14.4",
    "Stage 2 - Anna's Plunge Pos": 1,
    "Stage 3 - Anna's Dominatrix Time": "09:14.8",
    "Stage 3 - Anna's Dominatrix Pos": 1,
    "Stage 4 - Hiss & Claw Time": "04:20.1",
    "Stage 4 - Hiss & Claw Pos": 1,
    "Stage 5 - Vertigo Time": "04:00.0",
    "Stage 5 - Vertigo Pos": 1
  },
  {
    "RaceNumber": 4,
    "CardNumbers": 8032677,
    "Name": "Vaughn Ryden",
    "Club": "Crazy Cat Cyclery",
    "CourseClass": "Men Beginner Open",
    "StartTime": "29:35.6",
    "FinishTime": "48:48.5",
    "RaceTime": "16:25.4",
    "NonCompetitive": "N",
    "Position": 1,
    "JourneyTime": "19:12.9",
    "ExcludedExcess": "",
    "BehindTime": "",
    "Stage 1 - Monks Time": "02:18.5",
    "Stage 1 - Monks Pos": 2,
    "Stage 2 - Anna's Plunge Time": "01:05.3",
    "Stage 2 - Anna's Plunge Pos": 2,
    "Stage 3 - Anna's Dominatrix Time": "07:02.5",
    "Stage 3 - Anna's Dominatrix Pos": 1,
    "Stage 4 - Hiss & Claw Time": "03:05.7",
    "Stage 4 - Hiss & Claw Pos": 1,
    "Stage 5 - Vertigo Time": "02:53.5",
    "Stage 5 - Vertigo Pos": 1
  },
  {
    "RaceNumber": 1,
    "CardNumbers": 8032622,
    "Name": "Lalo Garcia",
    "Club": "",
    "CourseClass": "Men Beginner Open",
    "StartTime": "25:25.4",
    "FinishTime": "21:01.1",
    "RaceTime": "17:59.9",
    "NonCompetitive": "N",
    "Position": 2,
    "JourneyTime": "55:35.8",
    "ExcludedExcess": "",
    "BehindTime": "+1:34.46",
    "Stage 1 - Monks Time": "02:09.6",
    "Stage 1 - Monks Pos": 1,
    "Stage 2 - Anna's Plunge Time": "00:58.0",
    "Stage 2 - Anna's Plunge Pos": 1,
    "Stage 3 - Anna's Dominatrix Time": "07:57.8",
    "Stage 3 - Anna's Dominatrix Pos": 4,
    "Stage 4 - Hiss & Claw Time": "03:30.0",
    "Stage 4 - Hiss & Claw Pos": 3,
    "Stage 5 - Vertigo Time": "03:24.6",
    "Stage 5 - Vertigo Pos": 3
  },
  {
    "RaceNumber": 3,
    "CardNumbers": 8032614,
    "Name": "Charlie Simpson",
    "Club": "Crazy Cat Cyclery",
    "CourseClass": "Men Beginner Open",
    "StartTime": "31:23.5",
    "FinishTime": "58:30.5",
    "RaceTime": "18:45.5",
    "NonCompetitive": "N",
    "Position": 3,
    "JourneyTime": "27:07.1",
    "ExcludedExcess": "",
    "BehindTime": "+2:20.03",
    "Stage 1 - Monks Time": "02:39.0",
    "Stage 1 - Monks Pos": 5,
    "Stage 2 - Anna's Plunge Time": "01:10.2",
    "Stage 2 - Anna's Plunge Pos": 3,
    "Stage 3 - Anna's Dominatrix Time": "07:49.9",
    "Stage 3 - Anna's Dominatrix Pos": 3,
    "Stage 4 - Hiss & Claw Time": "03:38.0",
    "Stage 4 - Hiss & Claw Pos": 5,
    "Stage 5 - Vertigo Time": "03:28.4",
    "Stage 5 - Vertigo Pos": 5
  },
  {
    "RaceNumber": 6,
    "CardNumbers": 8032654,
    "Name": "Aziel Estrada",
    "Club": "Crazy Cat Cyclery",
    "CourseClass": "Men Beginner Open",
    "StartTime": "30:03.5",
    "FinishTime": "51:39.8",
    "RaceTime": "19:31.5",
    "NonCompetitive": "N",
    "Position": 4,
    "JourneyTime": "21:36.3",
    "ExcludedExcess": "",
    "BehindTime": "+3:06.04",
    "Stage 1 - Monks Time": "02:36.3",
    "Stage 1 - Monks Pos": 4,
    "Stage 2 - Anna's Plunge Time": "01:23.4",
    "Stage 2 - Anna's Plunge Pos": 4,
    "Stage 3 - Anna's Dominatrix Time": "08:45.7",
    "Stage 3 - Anna's Dominatrix Pos": 5,
    "Stage 4 - Hiss & Claw Time": "03:32.2",
    "Stage 4 - Hiss & Claw Pos": 4,
    "Stage 5 - Vertigo Time": "03:14.0",
    "Stage 5 - Vertigo Pos": 2
  },
  {
    "RaceNumber": 5,
    "CardNumbers": 8032668,
    "Name": "Maks Bevins",
    "Club": "Crazy Cat Cyclery",
    "CourseClass": "Men Beginner Open",
    "StartTime": "30:48.7",
    "FinishTime": "53:05.0",
    "RaceTime": "19:37.7",
    "NonCompetitive": "N",
    "Position": 5,
    "JourneyTime": "22:16.3",
    "ExcludedExcess": "",
    "BehindTime": "+3:12.25",
    "Stage 1 - Monks Time": "02:33.2",
    "Stage 1 - Monks Pos": 3,
    "Stage 2 - Anna's Plunge Time": "02:35.6",
    "Stage 2 - Anna's Plunge Pos": 6,
    "Stage 3 - Anna's Dominatrix Time": "07:35.8",
    "Stage 3 - Anna's Dominatrix Pos": 2,
    "Stage 4 - Hiss & Claw Time": "03:25.1",
    "Stage 4 - Hiss & Claw Pos": 2,
    "Stage 5 - Vertigo Time": "03:27.9",
    "Stage 5 - Vertigo Pos": 4
  },
  {
    "RaceNumber": 2,
    "CardNumbers": 8032616,
    "Name": "Jake Rath",
    "Club": "Trials of Rath Media",
    "CourseClass": "Men Beginner Open",
    "StartTime": "32:06.3",
    "FinishTime": "02:11.6",
    "RaceTime": "23:36.6",
    "NonCompetitive": "N",
    "Position": 6,
    "JourneyTime": "30:05.3",
    "ExcludedExcess": "",
    "BehindTime": "+7:11.13",
    "Stage 1 - Monks Time": "02:59.6",
    "Stage 1 - Monks Pos": 6,
    "Stage 2 - Anna's Plunge Time": "01:27.6",
    "Stage 2 - Anna's Plunge Pos": 5,
    "Stage 3 - Anna's Dominatrix Time": "10:52.6",
    "Stage 3 - Anna's Dominatrix Pos": 6,
    "Stage 4 - Hiss & Claw Time": "04:27.9",
    "Stage 4 - Hiss & Claw Pos": 6,
    "Stage 5 - Vertigo Time": "03:48.9",
    "Stage 5 - Vertigo Pos": 6
  },
  {
    "RaceNumber": 15,
    "CardNumbers": 8143982,
    "Name": "Fernando Estrada",
    "Club": "Faunos Racing Team",
    "CourseClass": "Men Expert Open",
    "StartTime": "23:19.8",
    "FinishTime": "43:19.0",
    "RaceTime": "13:12.2",
    "NonCompetitive": "N",
    "Position": 1,
    "JourneyTime": "19:59.3",
    "ExcludedExcess": "",
    "BehindTime": "",
    "Stage 1 - Monks Time": "01:55.6",
    "Stage 1 - Monks Pos": 2,
    "Stage 2 - Anna's Plunge Time": "00:48.5",
    "Stage 2 - Anna's Plunge Pos": 1,
    "Stage 3 - Anna's Dominatrix Time": "05:35.2",
    "Stage 3 - Anna's Dominatrix Pos": 1,
    "Stage 4 - Hiss & Claw Time": "02:27.4",
    "Stage 4 - Hiss & Claw Pos": 1,
    "Stage 5 - Vertigo Time": "02:25.5",
    "Stage 5 - Vertigo Pos": 1
  },
  {
    "RaceNumber": 13,
    "CardNumbers": 8032631,
    "Name": "Eric Sotomayor",
    "Club": "The Shock Lab",
    "CourseClass": "Men Expert Open",
    "StartTime": "20:18.6",
    "FinishTime": "52:54.8",
    "RaceTime": "14:13.4",
    "NonCompetitive": "N",
    "Position": 2,
    "JourneyTime": "32:36.2",
    "ExcludedExcess": "",
    "BehindTime": "+1:01.22",
    "Stage 1 - Monks Time": "01:56.3",
    "Stage 1 - Monks Pos": 3,
    "Stage 2 - Anna's Plunge Time": "00:54.9",
    "Stage 2 - Anna's Plunge Pos": 3,
    "Stage 3 - Anna's Dominatrix Time": "05:53.3",
    "Stage 3 - Anna's Dominatrix Pos": 2,
    "Stage 4 - Hiss & Claw Time": "02:34.3",
    "Stage 4 - Hiss & Claw Pos": 2,
    "Stage 5 - Vertigo Time": "02:54.6",
    "Stage 5 - Vertigo Pos": 5
  },
  {
    "RaceNumber": 10,
    "CardNumbers": 8032619,
    "Name": "Alexander Gutierrez",
    "Club": "",
    "CourseClass": "Men Expert Open",
    "StartTime": "34:47.5",
    "FinishTime": "05:38.5",
    "RaceTime": "14:14.2",
    "NonCompetitive": "N",
    "Position": 3,
    "JourneyTime": "30:51.0",
    "ExcludedExcess": "",
    "BehindTime": "+1:02.04",
    "Stage 1 - Monks Time": "01:59.3",
    "Stage 1 - Monks Pos": 4,
    "Stage 2 - Anna's Plunge Time": "00:56.2",
    "Stage 2 - Anna's Plunge Pos": 4,
    "Stage 3 - Anna's Dominatrix Time": "06:01.5",
    "Stage 3 - Anna's Dominatrix Pos": 5,
    "Stage 4 - Hiss & Claw Time": "02:37.5",
    "Stage 4 - Hiss & Claw Pos": 3,
    "Stage 5 - Vertigo Time": "02:39.8",
    "Stage 5 - Vertigo Pos": 2
  },
  {
    "RaceNumber": 12,
    "CardNumbers": 8143978,
    "Name": "Jon Ordonez",
    "Club": "Loam Society",
    "CourseClass": "Men Expert Open",
    "StartTime": "18:36.7",
    "FinishTime": "41:54.8",
    "RaceTime": "14:14.9",
    "NonCompetitive": "N",
    "Position": 4,
    "JourneyTime": "23:18.1",
    "ExcludedExcess": "",
    "BehindTime": "+1:02.70",
    "Stage 1 - Monks Time": "01:54.3",
    "Stage 1 - Monks Pos": 1,
    "Stage 2 - Anna's Plunge Time": "00:50.7",
    "Stage 2 - Anna's Plunge Pos": 2,
    "Stage 3 - Anna's Dominatrix Time": "05:54.2",
    "Stage 3 - Anna's Dominatrix Pos": 3,
    "Stage 4 - Hiss & Claw Time": "02:54.9",
    "Stage 4 - Hiss & Claw Pos": 6,
    "Stage 5 - Vertigo Time": "02:40.8",
    "Stage 5 - Vertigo Pos": 3
  },
  {
    "RaceNumber": 9,
    "CardNumbers": 8032610,
    "Name": "Max Guerra",
    "Club": "Merol Racing",
    "CourseClass": "Men Expert Open",
    "StartTime": "29:01.1",
    "FinishTime": "07:41.8",
    "RaceTime": "15:53.0",
    "NonCompetitive": "N",
    "Position": 5,
    "JourneyTime": "38:40.7",
    "ExcludedExcess": "",
    "BehindTime": "+2:40.83",
    "Stage 1 - Monks Time": "02:06.9",
    "Stage 1 - Monks Pos": 6,
    "Stage 2 - Anna's Plunge Time": "00:56.5",
    "Stage 2 - Anna's Plunge Pos": 5,
    "Stage 3 - Anna's Dominatrix Time": "07:09.3",
    "Stage 3 - Anna's Dominatrix Pos": 7,
    "Stage 4 - Hiss & Claw Time": "02:53.7",
    "Stage 4 - Hiss & Claw Pos": 5,
    "Stage 5 - Vertigo Time": "02:46.7",
    "Stage 5 - Vertigo Pos": 4
  },
  {
    "RaceNumber": 16,
    "CardNumbers": 8143956,
    "Name": "David Garcia",
    "Club": "Faunos Racing Team",
    "CourseClass": "Men Expert Open",
    "StartTime": "22:32.9",
    "FinishTime": "45:11.1",
    "RaceTime": "16:08.6",
    "NonCompetitive": "N",
    "Position": 6,
    "JourneyTime": "22:38.2",
    "ExcludedExcess": "",
    "BehindTime": "+2:56.36",
    "Stage 1 - Monks Time": "02:20.1",
    "Stage 1 - Monks Pos": 7,
    "Stage 2 - Anna's Plunge Time": "01:03.8",
    "Stage 2 - Anna's Plunge Pos": 8,
    "Stage 3 - Anna's Dominatrix Time": "06:43.6",
    "Stage 3 - Anna's Dominatrix Pos": 6,
    "Stage 4 - Hiss & Claw Time": "03:01.4",
    "Stage 4 - Hiss & Claw Pos": 7,
    "Stage 5 - Vertigo Time": "02:59.7",
    "Stage 5 - Vertigo Pos": 7
  },
  {
    "RaceNumber": 11,
    "CardNumbers": 8032635,
    "Name": "Clint Nelms",
    "Club": "Big Knobby Squad/Lonely Ghost",
    "CourseClass": "Men Expert Open",
    "StartTime": "33:43.9",
    "FinishTime": "50:05.6",
    "RaceTime": "16:26.3",
    "NonCompetitive": "N",
    "Position": 7,
    "JourneyTime": "16:21.8",
    "ExcludedExcess": "",
    "BehindTime": "+3:14.09",
    "Stage 1 - Monks Time": "02:02.9",
    "Stage 1 - Monks Pos": 5,
    "Stage 2 - Anna's Plunge Time": "01:02.7",
    "Stage 2 - Anna's Plunge Pos": 7,
    "Stage 3 - Anna's Dominatrix Time": "07:17.0",
    "Stage 3 - Anna's Dominatrix Pos": 8,
    "Stage 4 - Hiss & Claw Time": "03:06.3",
    "Stage 4 - Hiss & Claw Pos": 8,
    "Stage 5 - Vertigo Time": "02:57.4",
    "Stage 5 - Vertigo Pos": 6
  },
  {
    "RaceNumber": 28,
    "CardNumbers": 8032611,
    "Name": "Luis Encerrado",
    "Club": "Crazy Cat Cyclery",
    "CourseClass": "Men Expert Open",
    "StartTime": "57:44.5",
    "FinishTime": "19:16.1",
    "RaceTime": "18:02.5",
    "NonCompetitive": "N",
    "Position": 8,
    "JourneyTime": "21:31.7",
    "ExcludedExcess": "",
    "BehindTime": "+4:50.31",
    "Stage 1 - Monks Time": "02:34.5",
    "Stage 1 - Monks Pos": 8,
    "Stage 2 - Anna's Plunge Time": "01:14.6",
    "Stage 2 - Anna's Plunge Pos": 9,
    "Stage 3 - Anna's Dominatrix Time": "07:22.7",
    "Stage 3 - Anna's Dominatrix Pos": 9,
    "Stage 4 - Hiss & Claw Time": "03:10.6",
    "Stage 4 - Hiss & Claw Pos": 9,
    "Stage 5 - Vertigo Time": "03:40.1",
    "Stage 5 - Vertigo Pos": 9
  },
  {
    "RaceNumber": 8,
    "CardNumbers": 8032652,
    "Name": "Michael  Granados",
    "Club": "Conrad Construction",
    "CourseClass": "Men Expert Open",
    "StartTime": "37:57.0",
    "FinishTime": "32:54.5",
    "RaceTime": "21:38.6",
    "NonCompetitive": "N",
    "Position": 9,
    "JourneyTime": "54:57.6",
    "ExcludedExcess": "",
    "BehindTime": "+8:26.43",
    "Stage 1 - Monks Time": "02:48.2",
    "Stage 1 - Monks Pos": 9,
    "Stage 2 - Anna's Plunge Time": "01:20.2",
    "Stage 2 - Anna's Plunge Pos": 10,
    "Stage 3 - Anna's Dominatrix Time": "09:37.0",
    "Stage 3 - Anna's Dominatrix Pos": 10,
    "Stage 4 - Hiss & Claw Time": "04:05.2",
    "Stage 4 - Hiss & Claw Pos": 10,
    "Stage 5 - Vertigo Time": "03:48.0",
    "Stage 5 - Vertigo Pos": 10
  },
  {
    "RaceNumber": 14,
    "CardNumbers": 8143965,
    "Name": "Joel lujan",
    "Club": "Fungi Boyz",
    "CourseClass": "Men Expert Open",
    "StartTime": "19:16.2",
    "FinishTime": "46:55.4",
    "RaceTime": "27:08.9",
    "NonCompetitive": "N",
    "Position": 10,
    "JourneyTime": "27:39.2",
    "ExcludedExcess": "",
    "BehindTime": "+13:56.68",
    "Stage 1 - Monks Time": "13:51.2",
    "Stage 1 - Monks Pos": 10,
    "Stage 2 - Anna's Plunge Time": "00:58.8",
    "Stage 2 - Anna's Plunge Pos": 6,
    "Stage 3 - Anna's Dominatrix Time": "05:55.0",
    "Stage 3 - Anna's Dominatrix Pos": 4,
    "Stage 4 - Hiss & Claw Time": "02:51.3",
    "Stage 4 - Hiss & Claw Pos": 4,
    "Stage 5 - Vertigo Time": "03:32.6",
    "Stage 5 - Vertigo Pos": 8
  },
  {
    "RaceNumber": 27,
    "CardNumbers": 8143966,
    "Name": "Daniel Urrutia",
    "Club": "",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "24:28.4",
    "FinishTime": "15:29.7",
    "RaceTime": "14:58.7",
    "NonCompetitive": "N",
    "Position": 1,
    "JourneyTime": "51:01.4",
    "ExcludedExcess": "",
    "BehindTime": "",
    "Stage 1 - Monks Time": "02:08.5",
    "Stage 1 - Monks Pos": 1,
    "Stage 2 - Anna's Plunge Time": "00:59.3",
    "Stage 2 - Anna's Plunge Pos": 1,
    "Stage 3 - Anna's Dominatrix Time": "06:08.3",
    "Stage 3 - Anna's Dominatrix Pos": 1,
    "Stage 4 - Hiss & Claw Time": "02:53.1",
    "Stage 4 - Hiss & Claw Pos": 1,
    "Stage 5 - Vertigo Time": "02:49.5",
    "Stage 5 - Vertigo Pos": 1
  },
  {
    "RaceNumber": 18,
    "CardNumbers": 8032632,
    "Name": "Clinton Harkey",
    "Club": "Wreckless Sending",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "21:37.7",
    "FinishTime": "22:21.7",
    "RaceTime": "17:04.7",
    "NonCompetitive": "N",
    "Position": 2,
    "JourneyTime": "00:44.0",
    "ExcludedExcess": "",
    "BehindTime": "+2:06.03",
    "Stage 1 - Monks Time": "02:15.8",
    "Stage 1 - Monks Pos": 3,
    "Stage 2 - Anna's Plunge Time": "01:05.8",
    "Stage 2 - Anna's Plunge Pos": 4,
    "Stage 3 - Anna's Dominatrix Time": "07:17.3",
    "Stage 3 - Anna's Dominatrix Pos": 3,
    "Stage 4 - Hiss & Claw Time": "03:15.3",
    "Stage 4 - Hiss & Claw Pos": 2,
    "Stage 5 - Vertigo Time": "03:10.6",
    "Stage 5 - Vertigo Pos": 4
  },
  {
    "RaceNumber": 22,
    "CardNumbers": 8032612,
    "Name": "Adam  Becerra",
    "Club": "Merol Racing / Dog Speed",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "21:09.3",
    "FinishTime": "39:39.3",
    "RaceTime": "17:25.4",
    "NonCompetitive": "N",
    "Position": 3,
    "JourneyTime": "18:30.0",
    "ExcludedExcess": "",
    "BehindTime": "+2:26.67",
    "Stage 1 - Monks Time": "02:16.1",
    "Stage 1 - Monks Pos": 4,
    "Stage 2 - Anna's Plunge Time": "01:06.2",
    "Stage 2 - Anna's Plunge Pos": 5,
    "Stage 3 - Anna's Dominatrix Time": "07:41.3",
    "Stage 3 - Anna's Dominatrix Pos": 4,
    "Stage 4 - Hiss & Claw Time": "03:23.4",
    "Stage 4 - Hiss & Claw Pos": 5,
    "Stage 5 - Vertigo Time": "02:58.4",
    "Stage 5 - Vertigo Pos": 2
  },
  {
    "RaceNumber": 21,
    "CardNumbers": 8032640,
    "Name": "Luis Cortazar",
    "Club": "",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "26:11.6",
    "FinishTime": "58:46.5",
    "RaceTime": "18:27.7",
    "NonCompetitive": "N",
    "Position": 4,
    "JourneyTime": "32:34.9",
    "ExcludedExcess": "",
    "BehindTime": "+3:29.04",
    "Stage 1 - Monks Time": "03:56.8",
    "Stage 1 - Monks Pos": 7,
    "Stage 2 - Anna's Plunge Time": "01:04.6",
    "Stage 2 - Anna's Plunge Pos": 3,
    "Stage 3 - Anna's Dominatrix Time": "06:55.9",
    "Stage 3 - Anna's Dominatrix Pos": 2,
    "Stage 4 - Hiss & Claw Time": "03:29.6",
    "Stage 4 - Hiss & Claw Pos": 6,
    "Stage 5 - Vertigo Time": "03:00.8",
    "Stage 5 - Vertigo Pos": 3
  },
  {
    "RaceNumber": 19,
    "CardNumbers": 8032651,
    "Name": "Juan Gil",
    "Club": "Insanity Racing",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "27:31.7",
    "FinishTime": "56:59.1",
    "RaceTime": "18:49.7",
    "NonCompetitive": "N",
    "Position": 5,
    "JourneyTime": "29:27.4",
    "ExcludedExcess": "",
    "BehindTime": "+3:51.03",
    "Stage 1 - Monks Time": "02:19.8",
    "Stage 1 - Monks Pos": 5,
    "Stage 2 - Anna's Plunge Time": "01:04.4",
    "Stage 2 - Anna's Plunge Pos": 2,
    "Stage 3 - Anna's Dominatrix Time": "08:58.2",
    "Stage 3 - Anna's Dominatrix Pos": 7,
    "Stage 4 - Hiss & Claw Time": "03:16.0",
    "Stage 4 - Hiss & Claw Pos": 4,
    "Stage 5 - Vertigo Time": "03:11.4",
    "Stage 5 - Vertigo Pos": 5
  },
  {
    "RaceNumber": 17,
    "CardNumbers": 8032643,
    "Name": "Daniel Solorzano",
    "Club": "",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "23:49.4",
    "FinishTime": "47:59.5",
    "RaceTime": "19:51.5",
    "NonCompetitive": "N",
    "Position": 6,
    "JourneyTime": "24:10.1",
    "ExcludedExcess": "",
    "BehindTime": "+4:52.77",
    "Stage 1 - Monks Time": "02:30.5",
    "Stage 1 - Monks Pos": 6,
    "Stage 2 - Anna's Plunge Time": "01:14.4",
    "Stage 2 - Anna's Plunge Pos": 7,
    "Stage 3 - Anna's Dominatrix Time": "08:54.4",
    "Stage 3 - Anna's Dominatrix Pos": 6,
    "Stage 4 - Hiss & Claw Time": "03:49.2",
    "Stage 4 - Hiss & Claw Pos": 7,
    "Stage 5 - Vertigo Time": "03:23.0",
    "Stage 5 - Vertigo Pos": 6
  },
  {
    "RaceNumber": 20,
    "CardNumbers": 8032615,
    "Name": "Luke James Tsoukalas",
    "Club": "Insanity Racing",
    "CourseClass": "Men Intermediate Open",
    "StartTime": "26:48.0",
    "FinishTime": "56:45.6",
    "RaceTime": "19:54.6",
    "NonCompetitive": "N",
    "Position": 7,
    "JourneyTime": "29:57.6",
    "ExcludedExcess": "",
    "BehindTime": "+4:55.95",
    "Stage 1 - Monks Time": "02:15.5",
    "Stage 1 - Monks Pos": 2,
    "Stage 2 - Anna's Plunge Time": "01:14.1",
    "Stage 2 - Anna's Plunge Pos": 6,
    "Stage 3 - Anna's Dominatrix Time": "07:55.3",
    "Stage 3 - Anna's Dominatrix Pos": 5,
    "Stage 4 - Hiss & Claw Time": "03:15.9",
    "Stage 4 - Hiss & Claw Pos": 3,
    "Stage 5 - Vertigo Time": "05:13.9",
    "Stage 5 - Vertigo Pos": 7
  },
  {
    "RaceNumber": 24,
    "CardNumbers": 8032613,
    "Name": "Kara Samsel",
    "Club": "Podium Finish",
    "CourseClass": "Women Open",
    "StartTime": "35:17.7",
    "FinishTime": "27:23.5",
    "RaceTime": "20:27.9",
    "NonCompetitive": "N",
    "Position": 1,
    "JourneyTime": "52:05.9",
    "ExcludedExcess": "",
    "BehindTime": "",
    "Stage 1 - Monks Time": "02:33.2",
    "Stage 1 - Monks Pos": 1,
    "Stage 2 - Anna's Plunge Time": "01:15.5",
    "Stage 2 - Anna's Plunge Pos": 1,
    "Stage 3 - Anna's Dominatrix Time": "08:56.5",
    "Stage 3 - Anna's Dominatrix Pos": 1,
    "Stage 4 - Hiss & Claw Time": "04:06.1",
    "Stage 4 - Hiss & Claw Pos": 1,
    "Stage 5 - Vertigo Time": "03:36.6",
    "Stage 5 - Vertigo Pos": 1
  },
  {
    "RaceNumber": 26,
    "CardNumbers": 8032666,
    "Name": "Monica Stahl",
    "Club": "Miners MTB/Optavia",
    "CourseClass": "Women Open",
    "StartTime": "36:03.8",
    "FinishTime": "29:47.0",
    "RaceTime": "23:22.2",
    "NonCompetitive": "N",
    "Position": 2,
    "JourneyTime": "53:43.1",
    "ExcludedExcess": "",
    "BehindTime": "+2:54.31",
    "Stage 1 - Monks Time": "02:59.2",
    "Stage 1 - Monks Pos": 3,
    "Stage 2 - Anna's Plunge Time": "01:35.3",
    "Stage 2 - Anna's Plunge Pos": 3,
    "Stage 3 - Anna's Dominatrix Time": "10:15.5",
    "Stage 3 - Anna's Dominatrix Pos": 2,
    "Stage 4 - Hiss & Claw Time": "04:30.0",
    "Stage 4 - Hiss & Claw Pos": 2,
    "Stage 5 - Vertigo Time": "04:02.3",
    "Stage 5 - Vertigo Pos": 2
  },
  {
    "RaceNumber": 25,
    "CardNumbers": 8143971,
    "Name": "Angelica Carrillo",
    "Club": "Miners",
    "CourseClass": "Women Open",
    "StartTime": "37:06.2",
    "FinishTime": "32:14.2",
    "RaceTime": "23:32.2",
    "NonCompetitive": "N",
    "Position": 3,
    "JourneyTime": "55:08.0",
    "ExcludedExcess": "",
    "BehindTime": "+3:04.29",
    "Stage 1 - Monks Time": "02:55.3",
    "Stage 1 - Monks Pos": 2,
    "Stage 2 - Anna's Plunge Time": "01:30.2",
    "Stage 2 - Anna's Plunge Pos": 2,
    "Stage 3 - Anna's Dominatrix Time": "10:25.2",
    "Stage 3 - Anna's Dominatrix Pos": 3,
    "Stage 4 - Hiss & Claw Time": "04:33.1",
    "Stage 4 - Hiss & Claw Pos": 3,
    "Stage 5 - Vertigo Time": "04:08.4",
    "Stage 5 - Vertigo Pos": 3
  }
]

export default function lost_dog_2022() {
    return (
        <div className='background-race'>
        
        <div className="race">
              
            <div className='container'>
                <h1 className='gold-0'>Monks 2023</h1>
         
                <table class="tableizer-table">
            <thead><tr class="tableizer-firstrow"><th>RaceNumber</th><th>CardNumbers</th><th>Name</th><th>Club</th><th>CourseClass</th><th>StartTime</th><th>FinishTime</th><th>RaceTime</th><th>NonCompetitive</th><th>Position</th><th>JourneyTime</th><th>ExcludedExcess</th><th>BehindTime</th><th>Stage 1 - Monks Time</th><th>Stage 1 - Monks Pos</th><th>Stage 2 - Anna's Plunge Time</th><th>Stage 2 - Anna's Plunge Pos</th><th>Stage 3 - Anna's Dominatrix Time</th><th>Stage 3 - Anna's Dominatrix Pos</th><th>Stage 4 - Hiss & Claw Time</th><th>Stage 4 - Hiss & Claw Pos</th><th>Stage 5 - Vertigo Time</th><th>Stage 5 - Vertigo Pos</th></tr></thead><tbody>
            <tr><td>7</td><td>8032676</td><td>Jose Reyes</td><td>&nbsp;</td><td>eBike Open </td><td>54:33.9</td><td>28:46.8</td><td>21:13.8</td><td>Y</td><td>1</td><td>34:12.9</td><td>&nbsp;</td><td>&nbsp;</td><td>02:24.4</td><td>1</td><td>01:14.4</td><td>1</td><td>09:14.8</td><td>1</td><td>04:20.1</td><td>1</td><td>04:00.0</td><td>1</td></tr>
            <tr><td>4</td><td>8032677</td><td>Vaughn Ryden</td><td>Crazy Cat Cyclery</td><td>Men Beginner Open</td><td>29:35.6</td><td>48:48.5</td><td>16:25.4</td><td>N</td><td>1</td><td>19:12.9</td><td>&nbsp;</td><td>&nbsp;</td><td>02:18.5</td><td>2</td><td>01:05.3</td><td>2</td><td>07:02.5</td><td>1</td><td>03:05.7</td><td>1</td><td>02:53.5</td><td>1</td></tr>
            <tr><td>1</td><td>8032622</td><td>Lalo Garcia</td><td>&nbsp;</td><td>Men Beginner Open</td><td>25:25.4</td><td>21:01.1</td><td>17:59.9</td><td>N</td><td>2</td><td>55:35.8</td><td>&nbsp;</td><td>+1:34.46</td><td>02:09.6</td><td>1</td><td>00:58.0</td><td>1</td><td>07:57.8</td><td>4</td><td>03:30.0</td><td>3</td><td>03:24.6</td><td>3</td></tr>
            <tr><td>3</td><td>8032614</td><td>Charlie Simpson</td><td>Crazy Cat Cyclery </td><td>Men Beginner Open</td><td>31:23.5</td><td>58:30.5</td><td>18:45.5</td><td>N</td><td>3</td><td>27:07.1</td><td>&nbsp;</td><td>+2:20.03</td><td>02:39.0</td><td>5</td><td>01:10.2</td><td>3</td><td>07:49.9</td><td>3</td><td>03:38.0</td><td>5</td><td>03:28.4</td><td>5</td></tr>
            <tr><td>6</td><td>8032654</td><td>Aziel Estrada </td><td>Crazy Cat Cyclery </td><td>Men Beginner Open</td><td>30:03.5</td><td>51:39.8</td><td>19:31.5</td><td>N</td><td>4</td><td>21:36.3</td><td>&nbsp;</td><td>+3:06.04</td><td>02:36.3</td><td>4</td><td>01:23.4</td><td>4</td><td>08:45.7</td><td>5</td><td>03:32.2</td><td>4</td><td>03:14.0</td><td>2</td></tr>
            <tr><td>5</td><td>8032668</td><td>Maks Bevins</td><td>Crazy Cat Cyclery</td><td>Men Beginner Open</td><td>30:48.7</td><td>53:05.0</td><td>19:37.7</td><td>N</td><td>5</td><td>22:16.3</td><td>&nbsp;</td><td>+3:12.25</td><td>02:33.2</td><td>3</td><td>02:35.6</td><td>6</td><td>07:35.8</td><td>2</td><td>03:25.1</td><td>2</td><td>03:27.9</td><td>4</td></tr>
            <tr><td>2</td><td>8032616</td><td>Jake Rath</td><td>Trials of Rath Media</td><td>Men Beginner Open</td><td>32:06.3</td><td>02:11.6</td><td>23:36.6</td><td>N</td><td>6</td><td>30:05.3</td><td>&nbsp;</td><td>+7:11.13</td><td>02:59.6</td><td>6</td><td>01:27.6</td><td>5</td><td>10:52.6</td><td>6</td><td>04:27.9</td><td>6</td><td>03:48.9</td><td>6</td></tr>
            <tr><td>15</td><td>8143982</td><td>Fernando Estrada</td><td>Faunos Racing Team</td><td>Men Expert Open</td><td>23:19.8</td><td>43:19.0</td><td>13:12.2</td><td>N</td><td>1</td><td>19:59.3</td><td>&nbsp;</td><td>&nbsp;</td><td>01:55.6</td><td>2</td><td>00:48.5</td><td>1</td><td>05:35.2</td><td>1</td><td>02:27.4</td><td>1</td><td>02:25.5</td><td>1</td></tr>
            <tr><td>13</td><td>8032631</td><td>Eric Sotomayor</td><td>The Shock Lab</td><td>Men Expert Open</td><td>20:18.6</td><td>52:54.8</td><td>14:13.4</td><td>N</td><td>2</td><td>32:36.2</td><td>&nbsp;</td><td>+1:01.22</td><td>01:56.3</td><td>3</td><td>00:54.9</td><td>3</td><td>05:53.3</td><td>2</td><td>02:34.3</td><td>2</td><td>02:54.6</td><td>5</td></tr>
            <tr><td>10</td><td>8032619</td><td>Alexander Gutierrez</td><td>&nbsp;</td><td>Men Expert Open</td><td>34:47.5</td><td>05:38.5</td><td>14:14.2</td><td>N</td><td>3</td><td>30:51.0</td><td>&nbsp;</td><td>+1:02.04</td><td>01:59.3</td><td>4</td><td>00:56.2</td><td>4</td><td>06:01.5</td><td>5</td><td>02:37.5</td><td>3</td><td>02:39.8</td><td>2</td></tr>
            <tr><td>12</td><td>8143978</td><td>Jon Ordonez</td><td>Loam Society</td><td>Men Expert Open</td><td>18:36.7</td><td>41:54.8</td><td>14:14.9</td><td>N</td><td>4</td><td>23:18.1</td><td>&nbsp;</td><td>+1:02.70</td><td>01:54.3</td><td>1</td><td>00:50.7</td><td>2</td><td>05:54.2</td><td>3</td><td>02:54.9</td><td>6</td><td>02:40.8</td><td>3</td></tr>
            <tr><td>9</td><td>8032610</td><td>Max Guerra</td><td>Merol Racing </td><td>Men Expert Open</td><td>29:01.1</td><td>07:41.8</td><td>15:53.0</td><td>N</td><td>5</td><td>38:40.7</td><td>&nbsp;</td><td>+2:40.83</td><td>02:06.9</td><td>6</td><td>00:56.5</td><td>5</td><td>07:09.3</td><td>7</td><td>02:53.7</td><td>5</td><td>02:46.7</td><td>4</td></tr>
            <tr><td>16</td><td>8143956</td><td>David Garcia</td><td>Faunos Racing Team</td><td>Men Expert Open</td><td>22:32.9</td><td>45:11.1</td><td>16:08.6</td><td>N</td><td>6</td><td>22:38.2</td><td>&nbsp;</td><td>+2:56.36</td><td>02:20.1</td><td>7</td><td>01:03.8</td><td>8</td><td>06:43.6</td><td>6</td><td>03:01.4</td><td>7</td><td>02:59.7</td><td>7</td></tr>
            <tr><td>11</td><td>8032635</td><td>Clint Nelms</td><td>Big Knobby Squad/Lonely Ghost</td><td>Men Expert Open</td><td>33:43.9</td><td>50:05.6</td><td>16:26.3</td><td>N</td><td>7</td><td>16:21.8</td><td>&nbsp;</td><td>+3:14.09</td><td>02:02.9</td><td>5</td><td>01:02.7</td><td>7</td><td>07:17.0</td><td>8</td><td>03:06.3</td><td>8</td><td>02:57.4</td><td>6</td></tr>
            <tr><td>28</td><td>8032611</td><td>Luis Encerrado </td><td>Crazy Cat Cyclery</td><td>Men Expert Open</td><td>57:44.5</td><td>19:16.1</td><td>18:02.5</td><td>N</td><td>8</td><td>21:31.7</td><td>&nbsp;</td><td>+4:50.31</td><td>02:34.5</td><td>8</td><td>01:14.6</td><td>9</td><td>07:22.7</td><td>9</td><td>03:10.6</td><td>9</td><td>03:40.1</td><td>9</td></tr>
            <tr><td>8</td><td>8032652</td><td>Michael  Granados</td><td>Conrad Construction</td><td>Men Expert Open</td><td>37:57.0</td><td>32:54.5</td><td>21:38.6</td><td>N</td><td>9</td><td>54:57.6</td><td>&nbsp;</td><td>+8:26.43</td><td>02:48.2</td><td>9</td><td>01:20.2</td><td>10</td><td>09:37.0</td><td>10</td><td>04:05.2</td><td>10</td><td>03:48.0</td><td>10</td></tr>
            <tr><td>14</td><td>8143965</td><td>Joel lujan</td><td>Fungi Boyz</td><td>Men Expert Open</td><td>19:16.2</td><td>46:55.4</td><td>27:08.9</td><td>N</td><td>10</td><td>27:39.2</td><td>&nbsp;</td><td>+13:56.68</td><td>13:51.2</td><td>10</td><td>00:58.8</td><td>6</td><td>05:55.0</td><td>4</td><td>02:51.3</td><td>4</td><td>03:32.6</td><td>8</td></tr>
            <tr><td>27</td><td>8143966</td><td>Daniel Urrutia</td><td>&nbsp;</td><td>Men Intermediate Open</td><td>24:28.4</td><td>15:29.7</td><td>14:58.7</td><td>N</td><td>1</td><td>51:01.4</td><td>&nbsp;</td><td>&nbsp;</td><td>02:08.5</td><td>1</td><td>00:59.3</td><td>1</td><td>06:08.3</td><td>1</td><td>02:53.1</td><td>1</td><td>02:49.5</td><td>1</td></tr>
            <tr><td>18</td><td>8032632</td><td>Clinton Harkey</td><td>Wreckless Sending</td><td>Men Intermediate Open</td><td>21:37.7</td><td>22:21.7</td><td>17:04.7</td><td>N</td><td>2</td><td>00:44.0</td><td>&nbsp;</td><td>+2:06.03</td><td>02:15.8</td><td>3</td><td>01:05.8</td><td>4</td><td>07:17.3</td><td>3</td><td>03:15.3</td><td>2</td><td>03:10.6</td><td>4</td></tr>
            <tr><td>22</td><td>8032612</td><td>Adam  Becerra</td><td>Merol Racing / Dog Speed</td><td>Men Intermediate Open</td><td>21:09.3</td><td>39:39.3</td><td>17:25.4</td><td>N</td><td>3</td><td>18:30.0</td><td>&nbsp;</td><td>+2:26.67</td><td>02:16.1</td><td>4</td><td>01:06.2</td><td>5</td><td>07:41.3</td><td>4</td><td>03:23.4</td><td>5</td><td>02:58.4</td><td>2</td></tr>
            <tr><td>21</td><td>8032640</td><td>Luis Cortazar</td><td>&nbsp;</td><td>Men Intermediate Open</td><td>26:11.6</td><td>58:46.5</td><td>18:27.7</td><td>N</td><td>4</td><td>32:34.9</td><td>&nbsp;</td><td>+3:29.04</td><td>03:56.8</td><td>7</td><td>01:04.6</td><td>3</td><td>06:55.9</td><td>2</td><td>03:29.6</td><td>6</td><td>03:00.8</td><td>3</td></tr>
            <tr><td>19</td><td>8032651</td><td>Juan Gil</td><td>Insanity Racing</td><td>Men Intermediate Open</td><td>27:31.7</td><td>56:59.1</td><td>18:49.7</td><td>N</td><td>5</td><td>29:27.4</td><td>&nbsp;</td><td>+3:51.03</td><td>02:19.8</td><td>5</td><td>01:04.4</td><td>2</td><td>08:58.2</td><td>7</td><td>03:16.0</td><td>4</td><td>03:11.4</td><td>5</td></tr>
            <tr><td>17</td><td>8032643</td><td>Daniel Solorzano</td><td>&nbsp;</td><td>Men Intermediate Open</td><td>23:49.4</td><td>47:59.5</td><td>19:51.5</td><td>N</td><td>6</td><td>24:10.1</td><td>&nbsp;</td><td>+4:52.77</td><td>02:30.5</td><td>6</td><td>01:14.4</td><td>7</td><td>08:54.4</td><td>6</td><td>03:49.2</td><td>7</td><td>03:23.0</td><td>6</td></tr>
            <tr><td>20</td><td>8032615</td><td>Luke James Tsoukalas</td><td>Insanity Racing</td><td>Men Intermediate Open</td><td>26:48.0</td><td>56:45.6</td><td>19:54.6</td><td>N</td><td>7</td><td>29:57.6</td><td>&nbsp;</td><td>+4:55.95</td><td>02:15.5</td><td>2</td><td>01:14.1</td><td>6</td><td>07:55.3</td><td>5</td><td>03:15.9</td><td>3</td><td>05:13.9</td><td>7</td></tr>
            <tr><td>24</td><td>8032613</td><td>Kara Samsel</td><td>Podium Finish</td><td>Women Open</td><td>35:17.7</td><td>27:23.5</td><td>20:27.9</td><td>N</td><td>1</td><td>52:05.9</td><td>&nbsp;</td><td>&nbsp;</td><td>02:33.2</td><td>1</td><td>01:15.5</td><td>1</td><td>08:56.5</td><td>1</td><td>04:06.1</td><td>1</td><td>03:36.6</td><td>1</td></tr>
            <tr><td>26</td><td>8032666</td><td>Monica Stahl</td><td>Miners MTB/Optavia</td><td>Women Open</td><td>36:03.8</td><td>29:47.0</td><td>23:22.2</td><td>N</td><td>2</td><td>53:43.1</td><td>&nbsp;</td><td>+2:54.31</td><td>02:59.2</td><td>3</td><td>01:35.3</td><td>3</td><td>10:15.5</td><td>2</td><td>04:30.0</td><td>2</td><td>04:02.3</td><td>2</td></tr>
            <tr><td>25</td><td>8143971</td><td>Angelica Carrillo</td><td>Miners</td><td>Women Open</td><td>37:06.2</td><td>32:14.2</td><td>23:32.2</td><td>N</td><td>3</td><td>55:08.0</td><td>&nbsp;</td><td>+3:04.29</td><td>02:55.3</td><td>2</td><td>01:30.2</td><td>2</td><td>10:25.2</td><td>3</td><td>04:33.1</td><td>3</td><td>04:08.4</td><td>3</td></tr>
            </tbody></table>
            
            <CSVLink className="downloadLink" data={csvData}>Download Results</CSVLink>  
        </div>
        </div>
        </div>
    )
}
