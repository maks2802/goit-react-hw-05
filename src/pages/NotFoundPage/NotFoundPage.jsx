import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Not Found</h1>
      <Link className={s.link} to="/" element={<HomePage />}>
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
