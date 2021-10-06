import { Component } from "react";
import ItemReport from "../ItemReport";

import s from "./GeneratorItemReport.module.scss";

class GeneratorItemReport extends Component {
  state = {
    activeChaterIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeChaterIdx: index });
  };

  render() {
    const { activeChaterIdx } = this.state;
    const { arrChapters } = this.props;

    return (
      <ul className={s.list}>
        {arrChapters.map(({ chapter, value, text }, index) => (
          <li key={chapter} className={s.item}>
            <ItemReport
              chapter={chapter}
              value={value}
              text={text}
              idx={index}
              idxA={activeChaterIdx}
              setActiveIdx={this.setActiveIdx}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default GeneratorItemReport;
