import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-32 md:mt-8">Brand and History</h1>
      <div className="first-intro md:grid-cols-4">
        <div className="text-2xl col-span-3">
          <p>
            Yamaha's history began when its founder, Torakusu Yamaha, repaired a
            broken reed organ in 1887. Shortly thereafter, he successfully
            completed the first reed organ.
          </p>
          <p>
            <br></br>
            More than 130 years after our founding in 1887, we defined the
            Yamaha Philosophy as the philosophical framework that underpins
            business management at the Yamaha Group. Furthermore, in 2019, we
            established our new brand promise “Make Waves” to capture that
            special moment when our customers’ hearts tremble.
          </p>
        </div>
        <div className="col-span-1"><img className='w-72' src={"https://upload.wikimedia.org/wikipedia/commons/a/a5/Torakusu-yamaha.jpg"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
