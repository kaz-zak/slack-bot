'use strict';
// key: タスクの文字列, value: 完了しているかの真偽値
const tasks = new Map();

function todo(task) {
  tasks.set(task, false);
}

