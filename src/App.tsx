/* eslint-disable @typescript-eslint/no-unused-vars */
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feedback from "./components/feedback/Feedback";
import MyLoader from "./components/myLoader/MyLoader";
import CinemasAroundMe from "./homeworks/homework07/CinemasAroundMe/CinemasAroundMe";
import Homework08 from "./homeworks/homework08/Homework08";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/FetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Bitcoin from "./components/bitcoin/Bitcoin";
import UsersPage from "./components/usersPage/UsersPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="lesson05" element={<Lesson05 />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="lesson-1" element={<h2>lesson1</h2>
          } />
          <Route path="lesson-2" element={<h2>lesson2</h2>
          } />
          <Route path="lesson-3" element={<h2>lesson3</h2>
          } />
          <Route path="lesson-4" element={<Lesson04 />} />
          <Route path="lesson-5" element={<Lesson05 />} />
          <Route path="lesson-6" element={<h2>lesson6</h2>
          } />
          <Route path="lesson-7" element={<h2>lesson7</h2>
          } />
          <Route path="lesson-8" element={<Lesson08 />} />
          <Route path="lesson-9" element={<Lesson09 />} />
          <Route path="lesson-10" element={<Lesson10 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>   
  );
}

export default App;
