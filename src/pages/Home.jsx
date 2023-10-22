import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen m-2 p-4 rounded-xl">
      <div className="mx-4 my-2">
        <div className=" columns-2  flex w-full gap-x-6">
          <div className=" h-screen w-2/3">
            <div className="items-center justify-center">
              <img
                className="w-full max-h-96 bg-cover bg-center rounded-md"
                src="https://firebasestorage.googleapis.com/v0/b/quiz-app-9f658.appspot.com/o/al%20ict%20app%20pastpaper%20preview%20Untitled-2.png?alt=media&token=8c69ab85-3e3a-42a5-a214-709db2066ab9&_gl=1*1b88ps6*_ga*NDE1OTEyOTcxLjE2OTc0NzE4NzU.*_ga_CW55HF8NVT*MTY5Nzk5NDU4My40LjEuMTY5Nzk5NjU5NS4xOC4wLjA."
                alt=""
              />

              <br />
              <h1 className="text-center text-4xl">Quiz Type</h1>
              <div className=" columns-3 mt-10 mx-10 gap-x-6">
                <div class="border rounded-md overflow-hidden  shadow-lg">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quiz-app-9f658.appspot.com/o/sadasdasddddddddddd.png?alt=media&token=22680918-108f-4ab0-bb99-6c984cafef3f"
                    alt="Person 1"
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2  text-center">MCQ</h3>
                   
                  </div>
                </div>

                <div class="border rounded-md overflow-hidden  shadow-lg">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quiz-app-9f658.appspot.com/o/2020%2FMCQ_Image%2Fpgh%2FQuizImage_pgh?alt=media&token=0389d31f-3985-43e7-8484-aa9bc225b565"
                    alt="Person 2"
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2  text-center ">Structured</h3>
                  
                  </div>
                </div>

                <div class="border rounded-2xl overflow-hidden  shadow-lg">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quiz-app-9f658.appspot.com/o/tendencias-tecnologia-2019-bbva.jpg?alt=media&token=2a665538-9b0e-4bd3-8f34-fec5882f1fb2"
                    alt="Person 3"
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                   
                    
                    <div className="  ">
                      <button className="relative bg-blue-500 text-white px-4 py-2 overflow-hidden rounded-md">
                      <h3 class="text-xl font-semibold mb-2 text-center" >Eassy</h3>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-1/3 mb-20 bg-purple-100 rounded-xl border"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
