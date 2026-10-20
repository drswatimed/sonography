import { ArrowRight, Award, BadgeCheck, BookOpen, Building2, GraduationCap, HeartPulse, Layers, MapPin, Microscope, ScanLine, ShieldCheck, Sparkles, Stethoscope, Users } from 'lucide-react';
import { SectionHeading, CtaBand } from '@/components/Section';
import { hrefFor } from '@/lib/router';
import { images } from '@/lib/images';

const qualifications: [typeof GraduationCap, string, string, string][] = [
  [GraduationCap, 'MBBS', 'TNMC & Nair Hospital, Mumbai University', 'First Class · April 1996'],
  [GraduationCap, 'MD (Radiodiagnosis)', 'TNMC & Nair Hospital, Mumbai University', '2nd Rank, Mumbai University · Jan 2001'],
  [Award, 'DMRE (Radiodiagnosis)', 'College of Physicians & Surgeons (CPS), Mumbai', 'Completed with Distinction · Oct 1998'],
  [BadgeCheck, 'ISB MPM-CX', 'Indian School of Business (ISB)', 'Management Programme for Medical Doctors'],
];

const certifications: [typeof BadgeCheck, string, string, string][] = [
  [Sparkles, 'Healthcare AI Training', 'Clinical investigator across AI imaging projects', 'Trained in AI for healthcare'],
  [Layers, 'USG-Guided Microwave Ablation', 'Gynaecology, breast, thyroid, and fetal reductions', 'Specialized interventional training'],
  [Microscope, 'Diploma in Invasive Prenatal Procedures', 'Italy · Nov 2018 · under Dr. Giovanni Monni', 'CVS, amniocentesis, fetal reduction'],
  [HeartPulse, 'Online Fellowship in Fetal Ultrasound', 'Bangalore Fetal Medicine Centre (BFMC) · 2017–18', '16 months · Dr. Prathima Radhakrishnan'],
  [BadgeCheck, 'FMF UK Certificate · Fetal Abnormalities', 'Fetal Medicine Foundation, London · ID 92185', 'Anomaly scan competency · April 2018'],
  [BadgeCheck, 'FMF UK Certificate · 11–13 Week Scan', 'Fetal Medicine Foundation, London · ID 92185', 'NT, NB, DV, Tricuspid, UtA Doppler'],
  [Award, 'IOTA Certificate of Competence', 'IOTA Group, KU Leuven, Belgium · April 2018', 'Simple Rules, ADNEX model'],
  [ScanLine, 'Advanced Ultrasound in Infertility & Gynaecology', "Dr. Nagori's Institute, Ahmedabad · April 2018", '3D pelvic, AFC, endometrial receptivity, ART'],
  [ScanLine, 'Comprehensive Advanced Ultrasound in Gynaecology', 'Bengaluru · May 2019', 'Dr. Mala Sibal · DIE, adenomyosis, pelvic masses'],
  [HeartPulse, 'Advanced Fetal Echocardiography Workshop', 'Mediscan Systems, Chennai · April 2017', 'Dr. S. Suresh · complex CHD, segmental analysis'],
  [HeartPulse, 'Fetal Echocardiography Workshop', 'Mediscan Systems, Chennai · June 2015', 'Routine screening views & Doppler optimization'],
  [Microscope, 'Observership in Mammography & Breast Imaging', 'Tata Memorial Hospital, Mumbai · 2011', 'Screening, staging, image-guided interventions'],
  [ScanLine, 'Dedicated Color Doppler & USG Training', 'Thane Ultrasound Centre · 2001', 'Dr. Nitin Chaubal · fellowship-style training'],
];

const expertise = [
  ['Fetal Medicine & Advanced OB Imaging', '11–13 week genetic scans (NT/NB/DV/Tricuspid/UtA Doppler, pre-eclampsia screening), Level-II target anomaly scans, 3D/4D fetal neurosonography, obstetric Doppler for IUGR & placental disorders.'],
  ['Fetal Echocardiography', 'Sequential segmental cardiac assessment (4-chamber, LVOT, RVOT, 3VT), fetal arrhythmias, and complex congenital heart defect screening.'],
  ['Invasive Prenatal Procedures', 'Amniocentesis, chorionic villus sampling (CVS), and multifetal pregnancy reduction.'],
  ['Specialized Gynaecological Procedures', 'USG-guided saline hysterosalpingography (SSG/HyCoSy), gel vaginosonography, 3D SIS, IOTA-compliant ovarian tumor classification (ADNEX & Simple Rules), follicular tracking, uterine anomalies, deep infiltrating endometriosis (DIE) mapping.'],
  ['USG-Guided Ablation & Interventional Radiology', 'Microwave ablation in gynaecology, breast, thyroid, and fetal reductions. Diagnostic mammography reporting, USG-guided FNAC, core needle biopsies, and hook-wire pre-surgical lesion localization.'],
  ['AI in Healthcare & Digital Health', 'Clinical data annotation, AI algorithm validation, computer vision benchmarking in ultrasound, and real-time clinical decision-support systems.'],
];

const experience: [string, string, string, string][] = [
  ['Current', 'Head of Department — Radiology & Imaging', 'Bharat Ratna Dr. Babasaheb Ambedkar Municipal General Hospital, Kandivali (W), Mumbai', 'Directing clinical operations, emergency radiology, advanced OB imaging, PG teaching, and PC-PNDT compliance at a high-volume municipal tertiary hospital.'],
  ['Current', 'Head of Department — Radiology', 'Nirali A M Naik Charitable Healthcare Facility, Powai, Mumbai', 'Leading imaging operations, QA, protocol standardization, high-end ultrasonography, and community health initiatives.'],
  ['2019 – 2024', 'Founder & Director — Consultant Radiologist', 'Precision Diagnostic Centre, Borivali (W), Mumbai', 'Founded a super-specialty center for tertiary fetal medicine, prenatal genetics, and interventional ultrasound — including amniocentesis, CVS, fetal reduction, SIS, and MSK ultrasound.'],
  ['Nov 2001 – 2019', 'Founder & Managing Director — Consultant Radiologist', 'Anumaan Diagnostic Centre, Kalyan, Maharashtra', 'Built and ran a multi-modality diagnostic center for 18 years — 3D/4D ultrasound, whole-body Doppler, digital radiography, ARFI/shear wave elastography.'],
  ['Jan 2011 – Dec 2011', 'Consultant Radiologist', 'Lilavati Hospital & Research Centre, Bandra (W), Mumbai', 'Secondary and tertiary obstetric and gynaecological ultrasound at a leading multi-specialty tertiary care institution.'],
  ['Dec 2007 – Jul 2009', 'Head of Department — Radiology', 'Wockhardt (Fortis) Hospital, Kalyan (W), Maharashtra', 'Led inpatient/outpatient imaging services with a focus on high-risk obstetric imaging.'],
];

const teachingModules = [
  'Systematic 11–13 week genetic scan and FMF-standardized parameter measurement',
  'Step-by-step Level-II target anomaly scans and fetal biometry',
  'Basic and advanced fetal echocardiography views (4-chamber, outflow tracts, 3VT)',
  'IOTA Simple Rules and ADNEX algorithm for adnexal mass risk assessment',
  'Specialized gynaecological techniques: saline hysterosalpingography & gel vaginosonography',
  'Obstetric Doppler hemodynamics and protocol-driven FGR management',
];

const memberships = [
  'Society of Fetal Medicine (SFM) — Member',
  'ISB Alumni Network',
  'Fetal Medicine Foundation (FMF), UK — Accredited Member (ID: 92185)',
  'International Ovarian Tumor Analysis (IOTA) Group, Belgium — Certified Member',
  'Indian Radiological and Imaging Association (IRIA) — Life Member',
  'Maharashtra State Branch of IRIA (MSBIRIA) — Life Member',
  'Indian Federation of Ultrasound in Medicine and Biology (IFUMB) — Active Member',
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-teal-100 to-primary-100 blur-2xl opacity-70" />
              <img
                src={images.founderPortrait}
                alt="Dr. Swati Dilip Kshirsagar"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card ring-1 ring-ink-200"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur">
                <p className="text-base font-bold text-ink-950">Dr. Swati Dilip Kshirsagar</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-500">
                  MBBS, MD (Radiodiagnosis), DMRE (CPS), ISB MPM-CX<br />
                  Senior Consultant Radiologist & Fetal Medicine Specialist
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow"><Stethoscope className="h-3.5 w-3.5" /> Founder & Lead Mentor</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink-950 sm:text-5xl text-balance">
              Dr. Swati Dilip Kshirsagar
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              An accomplished Senior Consultant Radiologist, Fetal Medicine Specialist, and healthcare leader with over <strong className="text-ink-900">23 years of post-MD clinical, interventional, academic, and administrative excellence</strong>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600 text-pretty">
              She combines high-level clinical acumen with strategic healthcare leadership through her ISB MPM-CX credential, and formally trained in AI for healthcare as a clinical domain expert across imaging projects. Precision FemSono exists to bring that depth directly to small cohorts of practicing doctors.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-ink-50/70 p-4 ring-1 ring-ink-100">
                <Building2 className="h-5 w-5 shrink-0 text-teal-600" />
                <div>
                  <p className="text-sm font-bold text-ink-950">HOD — Radiology</p>
                  <p className="text-xs text-ink-500">Babasaheb Ambedkar Hospital, Kandivali (W)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-ink-50/70 p-4 ring-1 ring-ink-100">
                <Building2 className="h-5 w-5 shrink-0 text-teal-600" />
                <div>
                  <p className="text-sm font-bold text-ink-950">HOD — Radiology</p>
                  <p className="text-xs text-ink-500">Nirali Naik Charitable Facility, Powai</p>
                </div>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={hrefFor('training')} className="btn-primary">Train with Dr. Swati <ArrowRight className="h-4 w-4" /></a>
              <a href={hrefFor('contact')} className="btn-secondary">Reserve a conversation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive profile strip */}
      <section className="border-y border-ink-100 bg-ink-50/70 py-8">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-600">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-600" /> Mumbai, Maharashtra</span>
          <span className="hidden h-4 w-px bg-ink-200 sm:block" />
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary-600" /> FMF UK ID 92185</span>
          <span className="hidden h-4 w-px bg-ink-200 sm:block" />
          <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary-600" /> ISB MPM-CX alumnus</span>
          <span className="hidden h-4 w-px bg-ink-200 sm:block" />
          <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-teal-600" /> Published in Indian Journal of Applied Radiology</span>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading center eyebrow="Academic & Executive Qualifications" title="Degrees and distinctions" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualifications.map(([Icon, title, org, note]) => (
              <div key={title} className="card flex flex-col gap-3 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-950">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600">{org}</p>
                  <p className="mt-2 text-[11px] font-semibold text-teal-700">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-ink-50/70">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Advanced Certifications & Fellowships"
            title="13 specialized credentials across fetal medicine, gynaecology, and interventional ultrasound"
            subtitle="A depth of focused training that directly shapes the Precision FemSono curriculum."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map(([Icon, title, org, note]) => (
              <div key={title} className="card flex gap-4 p-5 transition hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-950">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600">{org}</p>
                  <p className="mt-2 text-[11px] font-semibold text-teal-700">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading center eyebrow="Core Areas of Expertise" title="What Dr. Swati teaches from direct experience" />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {expertise.map(([title, text]) => (
              <div key={title} className="card p-6">
                <h3 className="text-base font-bold text-ink-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional experience timeline */}
      <section className="section bg-ink-50/70">
        <div className="container-page">
          <SectionHeading center eyebrow="Professional Experience" title="23+ years across municipal, charitable, and private practice" />
          <div className="mt-12 space-y-4">
            {experience.map(([period, role, org, desc]) => (
              <div key={org} className="card grid gap-3 p-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-3">
                  <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 ring-1 ring-teal-100">{period}</span>
                  <p className="mt-3 text-sm font-bold text-ink-950">{role}</p>
                </div>
                <div className="sm:col-span-9">
                  <p className="text-sm font-semibold text-ink-900">{org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & workshops */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Teaching & Hands-on Training Leadership" title="Director & lead faculty for structured ultrasound training" />
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              Dr. Swati regularly conducts dedicated, hands-on training programmes in Ultrasonography in
              Gynaecology and Fetal Medicine for practicing Radiologists and Gynaecologists. She has been
              an invited guest speaker at the Surat Obstetrics and Gynaecological Society (SOGS) and the
              Gujarat Chapter ISAR National Conference (2022).
            </p>
            <a href={hrefFor('training')} className="btn-secondary mt-6">
              View the bootcamp curriculum <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {teachingModules.map((moduleText) => (
              <div key={moduleText} className="flex items-start gap-3 rounded-xl bg-ink-50/70 p-4 ring-1 ring-ink-100">
                <ScanLine className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <p className="text-sm leading-relaxed text-ink-700">{moduleText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research + Memberships */}
      <section className="section bg-ink-50/70">
        <div className="container-page grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Research Publication" title="Peer-reviewed scholarly work" />
            <div className="mt-6 card p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-700">2023 · Indian Journal of Applied Radiology, Vol. 9, Issue 1</p>
              <h3 className="mt-3 text-base font-bold text-ink-950">
                A Rare Case of Intrauterine Retained Foetal Bones Clinically Presenting with Pelvic Pain and Dysmenorrhea Following First Trimester Medical Termination of Pregnancy.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                Kshirsagar, S. D. (2023). Open Science Publications. The paper highlights transvaginal sonographic features,
                differential diagnosis, and hysteroscopic correlation in atypical post-abortion pelvic pain.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Professional Affiliations" title="Memberships & societies" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {memberships.map((member) => (
                <div key={member} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-ink-200/70">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                  <p className="text-sm leading-relaxed text-ink-700">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="section bg-white">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          <div className="card p-7">
            <ShieldCheck className="h-6 w-6 text-teal-600" />
            <h3 className="mt-4 text-lg font-bold text-ink-950">Small batches are clinical safety</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">Six doctors means a real chance to place the probe, ask the question, and correct the habit before it reaches your patient.</p>
          </div>
          <div className="card p-7">
            <GraduationCap className="h-6 w-6 text-primary-600" />
            <h3 className="mt-4 text-lg font-bold text-ink-950">Confidence comes from repetition</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">The goal is not to memorise a protocol. It is to recognise the normal, notice the abnormal, and know what to do next.</p>
          </div>
          <div className="card p-7">
            <HeartPulse className="h-6 w-6 text-accent-600" />
            <h3 className="mt-4 text-lg font-bold text-ink-950">Mentorship continues after launch</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">Your first 100 cases deserve an experienced second opinion. That is why the 90-day safety net is part of the complete track.</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Learn the scan. Build the center. Keep the mentor."
        subtitle="Join the next Precision FemSono cohort in Mumbai or Pune."
        primaryHref={hrefFor('contact')}
        primaryLabel="Reserve Your Seat"
        secondaryHref={hrefFor('success-stories')}
        secondaryLabel="See doctor outcomes"
      />
    </>
  );
}
