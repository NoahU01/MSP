// Englische Inhalte der Startseite – Übersetzungsentwurf zu content.ts, von MSP fachlich prüfen lassen.
import type { Baustein, CaseStudy, Person } from "./content";
import { team as teamDe } from "./content";

export const company = {
  claim: "Your HR business partner for leadership, development and change processes",
  slogan: "Making development tangible and measurable in your organisation.",
};

const [markDe, kathrinDe] = teamDe;

export const team: Person[] = [
  { ...markDe, role: "Development Architect", baustein: "MSP HR Business Partner" },
  { ...kathrinDe, role: "Practice Designer", baustein: "MSP Learning World" },
];

export const bausteine: Baustein[] = [
  {
    key: "hrbp",
    name: "HR Business Partner",
    claim: "Structure and control",
    slogan: "Structures that hold. Leadership that works.",
    question: "Is it about strategy, structure, processes, roles and clarity?",
    text: "We create the conditions in which people can perform at their best: clear responsibilities, robust structures and leadership that steers. Built for the long term and aligned with your business goals.",
    focus: ["Strategy & structure", "Roles & responsibility", "Processes & interfaces", "Leadership & succession"],
    details: [
      {
        title: "Organisational development",
        items: ["Leadership succession", "New organisational forms and structures", "Roles and job profiles", "Interface management and process development"],
      },
      {
        title: "Leadership development",
        items: ["Developing leadership teams", "Career and talent programmes", "Transfer assurance"],
      },
      {
        title: "Personnel development",
        items: ["Strategic HR development concepts", "Employee retention", "Career and succession planning", "Appraisal systems and training controlling"],
      },
      {
        title: "Team development",
        items: ["Team analysis methods", "Conflict resolution and mediation", "Developing a team culture"],
      },
    ],
  },
  {
    key: "lernwelt",
    name: "Learning World",
    claim: "Knowledge and social skills",
    slogan: "So that development truly takes hold in everyday work.",
    question: "Is it about further development, training and coaching?",
    text: "We build knowledge and social skills in a targeted way – practical and immediately applicable. Training, workshops and coaching that arrive in everyday work and make a difference there.",
    focus: ["Training & workshops", "Coaching", "Social skills", "Embedding learning tools"],
    details: [
      {
        title: "Training & workshops",
        items: ["Tailored to your situation", "Leadership skills and personal development", "All areas of social competence"],
      },
      {
        title: "Coaching",
        items: ["Executive coaching", "Support in new roles", "Team reflection"],
      },
      {
        title: "Embedding learning tools",
        items: ["Training needs and personality analyses upfront", "Application sequences for everyday work", "Follow-up support so that learning sticks"],
      },
    ],
    closing: "Training needs and personality analyses help to design training, workshops and coaching in a targeted way.",
  },
];

export const cases: CaseStudy[] = [
  {
    topic: "Business succession",
    headline: "Managers come with solutions instead of problems",
    situation:
      "In a family business, the children have taken over as managing partners. Until now, day-to-day problems landed unfiltered on the management's desk.",
    why: "The new generation needs room to develop the company strategically. If every decision crosses their desk, management becomes a bottleneck and the company loses momentum. Managers who take ownership are the prerequisite for a successful generational change.",
    assignment:
      "The partners' key question: “How do we get our managers to come to us with proposed solutions rather than problems?”",
    question: "Facing the same challenge?",
  },
  {
    topic: "Leadership in production",
    headline: "Developing shift supervisors in a targeted way",
    situation:
      "An employee survey reveals high dissatisfaction with leadership at shift supervisor level – particularly regarding social skills.",
    why: "Shift supervisors lead the people who produce every day. Where leadership fails there, motivation, collaboration and quality suffer – and good employees leave. Site and HR management therefore wanted a sustainable development concept rather than a one-off training.",
    question: "Similar feedback from your employee survey?",
  },
  {
    topic: "Annual appraisal",
    headline: "From mandatory meeting to leadership tool",
    situation:
      "A mid-sized company was already holding annual appraisals – but the quality of implementation fell short of the original objectives.",
    why: "Well-conducted annual appraisals are one of the most effective leadership tools: agreeing goals, assessing performance, planning development. Treated as a tiresome obligation, a company gives away exactly this lever.",
    assignment:
      "Analyse the existing process and redesign it together with the managers – so that they themselves stand behind its purpose and value for the organisation, for themselves and for their teams.",
    question: "Interested in our approach?",
  },
  {
    topic: "Two production sites",
    headline: "Strengthening communication culture, retaining leadership talent",
    situation:
      "Two production sites of an international group want to realign how people work together and strategically prepare young talent for a possible leadership role.",
    why: "Leadership talent from within secures succession and binds talent to the company instead of losing it to competitors. An open communication culture is the foundation for this.",
    assignment:
      "A development programme in which participants and their supervisors explore the leadership role and further develop their social skills.",
    question: "Are communication culture and talent development on your agenda too?",
  },
  {
    topic: "After restructuring",
    headline: "Getting newly formed teams up to speed quickly",
    situation:
      "Outsourcing a product line leads to staff being reassigned. Several teams are being put together anew.",
    why: "After a restructuring, what matters is that teams quickly work efficiently and effectively again. Otherwise, unclear roles and uncertainty cost performance for months.",
    assignment:
      "Team analyses for the areas concerned, guided by the question “What can I do on my own initiative as a team member to develop the new team?” – plus concrete recommendations for the managers.",
    question: "Interested in team and personality analyses?",
  },
  {
    topic: "Sales",
    headline: "Relieving management with a team leader structure",
    situation:
      "The head of sales (authorised signatory) of a mid-sized company carries most of the responsibility alone.",
    why: "He wants to relieve himself and optimise internal sales processes. A team leader structure distributes responsibility, speeds up decisions and makes sales less dependent on a single person.",
    assignment:
      "Full support throughout the structural change: selecting suitable team leaders and initial training to strengthen the newly created role.",
    question: "Organisational changes coming up?",
  },
  {
    topic: "Candidate check",
    headline: "Avoiding costly hiring mistakes",
    situation:
      "Within a short time, a mechanical engineering company made several staffing decisions that turned out to be disappointing.",
    why: "Wrong hires are expensive: onboarding, lost productivity, a new search and unrest in the team. The goal was therefore a way to systematically safeguard staffing decisions.",
    assignment:
      "A tool that analyses the fit between candidates and position and supports decision-makers in the selection process – and that can also be used in personnel and team development and in conflicts.",
    question: "Want to safeguard your staffing decisions?",
  },
];

export const pains = [
  {
    title: "Performance seeps away in unclear structures.",
    text: "Responsibilities are not defined, interfaces create friction, decisions are left pending. Good people work below their potential.",
  },
  {
    title: "Leadership is assumed rather than developed.",
    text: "Technically strong employees move into leadership roles – without the tools for it. Teams and results pay the price.",
  },
  {
    title: "Training takes place, but it has no effect.",
    text: "Courses are booked, everyday work stays the same. Without a clear link to business goals, the investment fizzles out.",
  },
];

export const facts = [
  { value: "20+", label: "years of experience – since 2002" },
  { value: "2", label: "modules – individually or combined" },
  { value: "DE", label: "nationwide for SMEs and large corporations" },
];

export const download = {
  kicker: "Free guide",
  title: "The human factor: how development becomes a",
  highlight: "success factor.",
  lead: "How organisational, leadership and personnel development contribute directly to your business goals: the key levers, typical pitfalls and concrete options for action – compact, to read and pass on to your decision-makers.",
  pages: "4 variants",
  size: null as string | null,
  href: null as string | null,
};
