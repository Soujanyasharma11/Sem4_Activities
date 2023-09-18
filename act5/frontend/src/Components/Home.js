import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const courses = [
    {
      name: 'C++',
      image: 'https://www.analyticsinsight.net/wp-content/uploads/2022/03/bh1-1024x725-1.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/C%2B%2B',
    },
    {
      name: 'C',
      image: 'https://contentstatic.techgig.com/photo/90325682.cms',
      wikiLink: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      name: 'Python',
      image: 'https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png',
      wikiLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    },
    {
      name: 'HTML',
      image: 'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png',
      wikiLink: 'https://en.wikipedia.org/wiki/HTML',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Welcome to our LMS page!!!</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-4">
              <img
                src={course.image}
                alt={course.name}
                className="card-img-top img-fluid"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h3 className="card-title text-center">{course.name}</h3>
                <div className="text-center">
                  <a
                    href={course.wikiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
