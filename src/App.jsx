import myImage from "./assets/avatar.png";
import tg from "./assets/tgLogo.svg";
import email from "./assets/email.svg";
import pointer from "./assets/pointer.svg";

function App() {
  return (
    <div className="">
      <div className="flex justify-center items-center w-full h-full">
        <article className="grid my-10 w-3/5  drop-shadow-2xl shadow-2xl divide-y divide-black p-12  ">
          <div
            id="Name"
            className="grid grid-cols-[70%_30%] divide-x divide-black pb-10"
          >
            <div>
              <h1 className="text-5xl font-Rubik  text-green-800  pt-3 pb-2 tracking-wider">
                GRINBERG ANTON
              </h1>
              <h3 className="text-2xl font-Trykker">Frontend Developer</h3>
            </div>
            <div>
              <ul className="pl-2 leading-9 flex flex-col">
                <li className="center">
                  <img
                    src={tg}
                    alt="tg"
                    className=" float-left w-7 pr-1 mb-2 "
                  ></img>
                  <a href="https://t.me/VIPersonax" className=" text-center">
                    @VIPersonax
                  </a>
                </li>
                {/* <li>
                  <img
                    src={email}
                    alt="email"
                    className="w-6 mb-3 text-center"
                  ></img>
                  <p>grinberg.anton121@gmail.com</p>
                </li> */}
                <li>
                  <img
                    src={pointer}
                    alt="pointer"
                    className="w-7 pr-1 float-left"
                  ></img>
                  <p>Беларусь, Минск</p>
                </li>
              </ul>
            </div>
          </div>

          <div id="Ava+bio" className="grid grid-cols-[20%_80%] py-10">
            <img src={myImage} alt="avatar" className="w-10/12"></img>
            <div className="">
              <p className="font-Trykker pr-6">
                Fast learning specialist in the field of web development. When
                approaching the problem, I thoroughly dive into the given
                problem. I can find the consensus language for motivating a
                team.
              </p>
            </div>
          </div>

          <div id="WorkExperience" className=" grid grid-cols-[70%_30%]">
            <div>
              <div>
                <h2 className=" text-green-800 font-Rubik text-xl py-10">
                  |Work Experience
                </h2>
                <p className="pr-6 font-Trykker">
                  From 2023 I am studying at university. In 2024 he participated
                  in the hackathon and was a team operator. Work on pet-projects
                  to improve abilities.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="font-Trykker">
                <div>
                  <p className="leading-9">
                    <span className="font-Rubik  text-green-800">
                      |Education
                      <br />
                    </span>
                    <span className="font-Trykker">
                      Belarusian State University
                    </span>
                    <br />
                  </p>
                  <ul>
                    <li>Faculty: Mechanics and Mathematics</li>
                    <li>Specialty: Mathematics and Computer Science</li>
                    <li>
                      <a
                        href="https://mmf.bsu.by/en/bachelors-programs/mathematics-and-computer-science-mathematical-and-software-of-mobile-devices/"
                        target="_blank"
                      >
                        Profiling: Mathematical and software of mobile devices
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="Skils" className=" font-Trykker">
                <h3 className="font-Rubik text-green-800 leading-9">|SKILLS</h3>

                <ul className="pl-1">
                  <li className="font-black">WEB</li>
                  <ul className=" leading-8">
                    <li>JS, CSS, HTML, SASS</li>
                    <li>React, Vite</li>
                    <li>React Router</li>
                    <li>JsonServer</li>
                    <il>TailWind</il>
                  </ul>
                  <li className="font-black">OTHER</li>
                  <ul className=" leading-8">
                    <li>C++</li>
                    <li>GitHub, Git Bash, GitLab</li>
                    <li>Photoshop, Figma, Canvas</li>
                    <li>Ubuntu</li>
                    <li>Wolfram Mathematica</li>
                    <li>SqlServer</li>
                  </ul>
                </ul>
              </div>

              <div>
                <p className=" w-3 text-green-800 font-Rubik text-xl py-2">
                  |Languages
                </p>
                <p className=" font-Trykker">
                  🇬🇧 English (B2)
                  <br />
                  🇷🇺 Russian (Native).
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
