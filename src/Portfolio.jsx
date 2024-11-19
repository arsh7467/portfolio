// Card Component
// eslint-disable-next-line react/prop-types
const Card = ({ title, children }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transition transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-xl font-bold mb-4 text-blue-600">{title}</h2>
        <div className="text-gray-700">{children}</div>
    </div>
);

// Objective Card Component (Single Div)
const ObjectiveCard = () => (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transition transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Objective</h2>
        <p>
            Recent Engineering graduate with proficiency in HTML, CSS, JavaScript, React.js, and Tailwind CSS,
            seeking to start a career as a Frontend Developer to create intuitive web applications and deliver
            exceptional user experiences.
        </p>
    </div>
);

// Education Card Component
const EducationCard = () => (
    <Card title="Education">
        <p><strong>Bachelor of Engineering</strong></p>
        <p>Chandigarh University, Mohali | CGPA: 6.9 | 2020-2024</p>
        <br />
        <p><strong>Intermediate</strong></p>
        <p>Sri Guru Gobind Singh School, Chandigarh | 60% | 2019-2020</p>
    </Card>
);

// Skills Card Component
const SkillsCard = () => (
    <Card title="Skills">
        <p><strong>Programming Languages:</strong> JavaScript</p>
        <p><strong>Technologies:</strong> HTML, CSS, React.js, Tailwind CSS</p>
        <p><strong>Extra Skills:</strong> Power BI</p>

    </Card>
);

// Certifications Card Component
const CertificationsCard = () => (
    <Card title="Certifications">
        <ul>
            <li>InterShala: Web Development Course</li>
            <li>NPTEL: Software Testing</li>
        </ul>
    </Card>
);

// Achievements Card Component
const AchievementsCard = () => (
    <Card title="Achievements">
        <ul>
            <li>Active participant in School NSS Programme</li>
            <li>Winning Captain in Zonal level Cricket Tournament 2017, Mohali, Punjab</li>
        </ul>
    </Card>
);

// Main Portfolio Page Component
const Portfolio = () => (
    <div>
        <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto mt-10 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Arsh Mohan Arora</h2>
            <h3 className="text-lg font-medium text-gray-600 mb-4">Frontend Developer | BE/CSE Graduate</h3>
            <p className="text-gray-700 mb-2">+91-8196819819 | Mohali, India</p>
            <p className="text-gray-700 mb-4">
                aroraarsh1508@gmail.com |
                <a
                    className="text-black-500 hover:underline  ml-1"
                    href="https://www.linkedin.com/in/arsh-mohan-arora-82a047277/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                |
                <a
                    className="text-black-500 hover:underline  ml-1"
                    href="https://github.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </p>
        </div>

        <div className="container mx-auto p-8 space-y-6 sm:space-y-8 md:space-y-10">
            {/* Objective Card in a Single Div */}
            <ObjectiveCard />

            {/* Grid for other 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <EducationCard />
                <SkillsCard />
                <CertificationsCard />
                <AchievementsCard />
            </div>
        </div>
    </div>
);

export default Portfolio;

