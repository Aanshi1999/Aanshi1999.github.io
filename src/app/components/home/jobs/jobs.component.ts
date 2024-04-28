import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.scss"],
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: "Mobiato",
      Title: "Senior Software Engineer",
      Date: "Dec 2023 – present",
      Description: [
        "Spearheaded Angular development, prioritizing dynamic report generation with Mat Angular tables.",
        "Enhanced data visualization by integrating Chart.js for stacked graphs and npm progress bar for transparent task tracking.",
        "Contributed to user experience with live tracking maps using AGM Maps, ensuring real-time location visualization.",
        "Dynamic Forms : The system is able to create forms and allows the user to control validation, input types, design without write code. ",
      ],
    },
    {
      Tab: "Bellurbis ",
      Title: "Associate Software Engineer",
      Date: "Jan 2022 - Dec 2023 (2 year)",
      Description: [
        "Led a M.P. government healthcare project, improving quality and access.",
        "Enhanced user engagement with responsive design and integrated UI libraries: chart.js, jspdf, and sheet.js.",
        "Revolutionized remote consultations via Twilio integration, enhancing healthcare services.",
        "Optimized application performance through code refactoring and Angular expertise.",
      ],
    },
    {
      Tab: "Education",
      Title: "MCA (Integrated)",
      Date: "2017 — 2022",

      Description: [
        "Completed Master in Computer Application (MCA) from IPS Academy School of Computers, specializing in software engineering.",
        "Developed a Student Enquiry System using Angular, focusing on creating a user-friendly interface for efficient information retrieval.",
        "Implemented RESTful APIs for seamless data communication in the project.",
      ],
    },
  ];
  active = 0;

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}
}
