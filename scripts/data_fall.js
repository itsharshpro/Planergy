let year = '2023';
let semester = 'Fall';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'BIOTECH': new School('B', 'School of Biological Sciences', []),
	'PHY': new School('P', 'School of Physical Sciences', []),
	'MATHS': new School('M', 'School of Mathematical Sciences', []),
	'CSE': new School('CS', 'School of Computer Sciences', []),
	'BA': new School('H', 'School of Humanities and Social Sciences', []),
	'MBBS': new School('R', 'Center for Medical and Radiation Physics', []),
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	/* Biology */
	'B201': new Course('Microbiology (B3)', 'MicroBio', 'D'),
	'B202': new Course('Biochemistry (LH2)', 'Biochem', 'B'),

	'B301': new Course('Animal Physiology (LH3)', 'AnimPhys', 'D'),
	'B302': new Course('Plant Physiology (LH3)', 'PlantPhys', 'E'),
	'B303': new Course('Ecology (LH3)', 'Ecology', 'F'),

	'B402': new Course('Developmental Biology (LH2)', 'DevBio', 'F'),
	'B405': new Course('Biotechniques (LH2)', 'Biotech', 'A'),
	'B406': new Course('Introductory Biophysics (LH2)', 'Biophys', 'D'),
	'B464': new Course('Neurobiology (B5)', 'Neuro', 'C'),
	'B465': new Course('Structural Biology (B5)', 'StrBio', 'B'), 

	'B552': new Course('Advanced Immunology (B4)', 'AdvImmuno', 'C'), 

	/* Computer Science */
	'CS101': new Course('Python Programming', 'ToC', 'J'),
	'CS102': new Course('Data Structures and Algorithms', 'DSA', 'I'),
	'CS103': new Course('Discrete Mathematics', 'DM', 'B'),
	'CS104': new Course('Computer Organization and Architecture', 'COA', 'A'),
	'CS105': new Course('Digital Logic', 'DigLog', 'A'),
	'CS106': new Course('Computer Networks', 'CN', 'H'),
	'CS107': new Course('Operating Systems', 'OS', 'G'),
	'CS108': new Course('Database Management Systems', 'DBMS', 'F'),
	'CS109': new Course('Software Engineering', 'SE', 'E'),
	'CS110': new Course('Theory of Computation', 'ToC', 'D'),
	'CS111': new Course('Computer Graphics', 'CG', 'C'),
	/* Humanities */
	'H238': new Course('Life & Communication in Urban (M4)', 'Urban', 'A'),
	'H225': new Course('Introduction to Psychology (LH5)', 'Psycho', 'K2'),
	'H235': new Course('Sociology of Science & Technology (LH5)', 'Socio', 'K1'),

	/* Mathematics */
	'M201': new Course('Real Analysis (M1)', 'Real', 'E'),
	'M203': new Course('Discrete Mathematics (M1)', 'DM', 'B'),
	'M205': new Course('Linear Algebra (M1)', 'LinAl', 'A'),
	'M302': new Course('Rings and Modules (M2)', 'R&M', 'B'),
	'M303': new Course('Differential Equation (M2)', 'DE', 'D'),
	'M305*': new Course('Number Theory (M2)', 'NT', 'F'),
	'M306': new Course('Calculus of Several Variables (M2)', 'CSV', 'C'),
	'M305': new Course('Statistics (M5)', 'Stats', 'B'),
	'M401': new Course('Functional Analysis (M3)', 'FA', 'C'),
	'M403': new Course('Commutative Algebra (M3)', 'CA', 'D'),
	'M405': new Course('Topology (M3)', 'Topology', 'E'),
	'M484': new Course('Commutative Algebra (M5)', 'CA', 'D'),
	'M466': new Course('Measure Theory (M5)', 'MT', 'A'),

	/* Physics */
	'P201': new Course('Classical Mechanics I (P107)', 'CM1', 'E'),
	'P202': new Course('Mathematical Methods I (LH4)', 'MM1', 'F'),
	'P207': new Course('Linear Optics (P126)', 'LinOptics', 'B'),
	'P245': new Course('Basic Electronics Theory and Lab (P126)', 'ElecLab', 'D'),
	'P302': new Course('Statistical Mechanics (P107)', 'StatMech', 'C'),
	'P303': new Course('Quantum Mechanics - II (P107)', 'QM2', 'F'),
	'P304': new Course('Special Theory of Relativity (P107)', 'STR', 'D'),
	'P405': new Course('Atoms, molecules and Radiation (P127)', 'AMR', 'F'),
	'P451': new Course('Advanced Solid State Physics (P107)', 'ASS', 'B'),
	'P453': new Course('Quantum Field Theory I (P109)', 'QFT1', 'C'),
	'P462': new Course('Introduction to Quantum Optics (P108)', 'IQO', 'C'),
	'P473': new Course('Experimental Techniques (LH1)', 'ExpTech', 'A'),
	'P474': new Course('Introduction to Cosmology (P127)', 'Cosmo', 'D'),

	/* MBBS*/
	'R111': new Course('Anatomy', 'Ay', 'A'),
	'R112': new Course('Dermatology', 'Dy', 'C'),
	'R113': new Course('Pathology', 'Pa', 'B'),
	'R114': new Course('Physiology', 'Pl', 'C'),
	'R115': new Course('Pediatrics', 'Ps', 'D'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];
