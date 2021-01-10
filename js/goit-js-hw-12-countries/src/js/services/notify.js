import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
export default {
  clickWarning() {
    info({
      text: 'Too many matches found. Pleace enter a more specific query!',
      modules: new Map([
        [
          Confirm,
          {
            confirm: true,
            buttons: [
              {
                text: 'Ok',
                primary: true,
                click: notice => {
                  notice.close();
                },
              },
            ],
          },
        ],
      ]),
    });
  },
  clickError() {
    info({
      text: 'There is no such country. Pleace enter a more specific query!',
      modules: new Map([
        [
          Confirm,
          {
            confirm: true,
            buttons: [
              {
                text: 'Ok',
                primary: true,
                click: notice => {
                  notice.close();
                  input.value = '';
                },
              },
            ],
          },
        ],
      ]),
    });
  },
};
