import s from "./App.module.scss";
import sg from "../../vars.module.css";
import PropTypes from "prop-types";

import GeneratorItemReport from "../GeneratorItemReport";

function App({ arr }) {
  console.log(arr);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrapperReportMenu}>
          <GeneratorItemReport arrChapters={arr} />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      chapter: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      // type: PropTypes.oneOf(["success", "error"]),
    })
  ),
};

export default App;
