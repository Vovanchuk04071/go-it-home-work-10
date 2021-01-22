import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
export default {
  clickWarning() {
    info({
      text: 'За запитом нічого не знайдено! Повторіть будь ласка!',
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
};
