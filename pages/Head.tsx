import * as React from "react";
import Head from "next/head";
import { injectGlobal } from "styled-components";
import dynamic from "next/dynamic";

injectGlobal`
  body {
    font-size: .28rem;
  }
`

import("./init");

interface Titem {
  title: string;
  description: string;
  keywords: string;
}

interface THeadList {
  [name: string]: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

const NORMAL_INFO: Titem = {
  title: "水电工程承包",
  description: "承接各种水电工程",
  keywords: "装灯，水管，工程承包"
};

const headlist: THeadList = {};

export function getHead(name: string): Titem {
  const item = headlist[name];
  if (item) {
    const { title, description, keywords } = item;

    return {
      title: title || NORMAL_INFO.title,
      description: description || NORMAL_INFO.description,
      keywords: keywords || NORMAL_INFO.keywords
    };
  } else {
    return NORMAL_INFO;
  }
}

export function getPageHead(name: string): JSX.Element {
  const { title, description, keywords } = getHead(name);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="renderer" content="webkit" />
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width,initial-scale=1,user-scalable=yes,maximum-scale=1"
      />
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/static/css/fonticons/iconfont.css" />
    </Head>
  );
}
