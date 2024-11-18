function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h1>
      <p className="text-lg text-gray-600 mb-8">Explore some of my work:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-5xl">
        {[
          { title: "Portfolio", description: "My portfolio website" },
          { title: "Todo List in React", description: "A Todo List app built with React" },
          { title: "Calculator in React", description: "A calculator app built with React" },
          { title: "Registration Form", description: "A registration form built with JavaScript" },
          { title: "Amazon Webpage", description: "A replica of Amazon's webpage using HTML & CSS" },
          { title: "Catering Webpage", description: "A webpage for a catering service using HTML & CSS" }
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
