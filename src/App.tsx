/* eslint-disable @typescript-eslint/no-unused-vars */
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feedback from "./components/feedback/Feedback";
import MyLoader from "./components/myLoader/MyLoader";
import Homework08 from "./homeworks/homework08/Homework08";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/FetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./lessons/lessonsList/Lessons";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Bitcoin from "./components/bitcoin/Bitcoin";
import UsersPage from "./components/usersPage/UsersPage";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lessons from "./lessons/lessonsList/Lessons";
import MyHomePage from "./components/myHomePage/MyHomePage";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";
import UserCard from "./components/userCard/UserCard";
import HomeworkList from "./homeworks/homeworkList/HomeworkList";
import FormGender from "./components/formGender/FormGender";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MyHomePage />} />
          <Route path="Lessons" element={<Lessons />} />
          <Route path="Homeworks" element={<HomeworkList />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="lesson-1" element={<Lesson01 />} />
          <Route path="lesson-2" element={<Lesson02 />} />
          <Route path="lesson-3" element={<Lesson03 />} />
          <Route path="lesson-4" element={<Lesson04 />} />
          <Route path="lesson-5" element={<Lesson05 />} />
          <Route path="lesson-6" element={<h2>lesson6</h2>} />
          <Route path="lesson-7" element={<h2>lesson7</h2>} />
          <Route path="lesson-8" element={<Lesson08 />} />
          <Route path="lesson-9" element={<Lesson09 />} />
          <Route path="lesson-10" element={<Lesson10 />} />
          <Route path="lesson-11" element={<Lesson11 />} />
          <Route path="lesson-12" element={<Lesson12 />} />
          <Route path="homework-1" element={<Homework01 />} />
          <Route path="homework-2" element={<Homework02 />} />
          <Route path="homework-3" element={<Homework03 />} />
          <Route path="homework-4" element={<Homework08 />} />
          <Route path="homework-5" element={<Feedback />} />
          <Route path="homework-6" element={<FormGender />} />
         
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
// <FormGender/>
