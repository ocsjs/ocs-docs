import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

const imageExamShowCase = require('@site/static/img/script/exam_show_case.png').default;
const imageHomepage = require('@site/static/img/script/homepage.png').default;
const imageStudyShowCaseCX = require('@site/static/img/script/study_show_case_cx.png').default;
const imageStudyShowCaseZHS = require('@site/static/img/script/study_show_case_zhs.png').default;
export function ScriptShowCase(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles.showCaseImgContainer}>

        <div className={styles.showCase} style={{ width: '25%' }}>
          <img className={styles.showCaseImg} src={imageHomepage}></img>
          <div className={styles.showCaseDesc}>
            拥有人性化的操作页面以及使用提示，所见即所得，帮助你快速上手。
          </div>
        </div>

        <div className={styles.showCase} style={{ width: '50%' }}>
          <div style={{ display: 'flex' }}>
            <img style={{ width: '50%' }} className={styles.showCaseImg} src={imageStudyShowCaseCX}></img>
            <img style={{ width: '50%' }} className={styles.showCaseImg} src={imageStudyShowCaseZHS}></img>
          </div>
          <div className={styles.showCaseDesc}>
            强大的平台兼容，可实现多个平台的脚本运行，互不影响。
          </div>
        </div>

        <div className={styles.showCase} style={{ width: '25%' }}>
          <img style={{ width: '80%' }} className={styles.showCaseImg} src={imageExamShowCase}></img>
          <div className={styles.showCaseDesc}>
            自动答题，作业考试无所不能，强大的题库配置帮你解放双手。
          </div>
        </div>

      </div>

    </div>
  );
}
