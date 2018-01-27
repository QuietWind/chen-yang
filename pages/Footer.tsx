import * as React from "react";
import * as classnames from "classnames";
import * as styles from "styles/Footer.scss";

interface FooterProps {
  activeKey: string;
}

interface FooterState {}

const items = [
  {
    icon: "home",
    name: "首页",
    key: "homepage"
  },
  {
    icon: "tuiguangyoushi",
    name: "核心优势",
    key: "core"
  },
  {
    icon: "gongchengxiangmu",
    name: "工程案例",
    key: "project"
  },
  {
    icon: "wechat",
    name: "联系我们",
    key: "contactme"
  }
];

class Footer extends React.Component<FooterProps, FooterState> {
  public render(): JSX.Element {
    const { activeKey } = this.props;

    return (
      <footer className={"footer"}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ul>
          {items.map(ele => (
            <li
              key={ele.key}
              className={classnames("iconitem", {
                ["active"]: activeKey === ele.key
              })}
            >
              <i className={`icon iconfont icon-${ele.icon}`} />
              {ele.name}
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;
