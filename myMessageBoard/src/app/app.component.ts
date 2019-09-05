import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /**
   * 留言姓名
   *
   * @type {string}
   * @memberof AppComponent
   */
  name: string = '';

  /**
   * 訊息內容
   *
   * @type {string}
   * @memberof AppComponent
   */
  content: string = '';

  /**
   * 所有留言
   *
   * @type {Message[]}
   * @memberof AppComponent
   */
  messages: Message[] = [];

  /**
   * 新增留言
   *
   * @memberof AppComponent
   */
  addMessage(){
    /* Trim(Char[])	：從目前的 String 物件中移除陣列中指定之一組字元的所有開頭和結尾指定項目。
       Trim()	      ：從目前的 String 物件中移除所有的開頭和結尾空白字元。從目前的字串開頭和結尾處移除
       回傳          ：Char參數中所有出現的字元後，所保留下來的字串。
       如果 trimChars 是 null 或空陣列，則反而會移除空白字元。
       如果在目前的執行個體中無法修剪任何字元，則方法傳回未變更的目前執行個體。
    */
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }

    const message = new Message(this.name, this.content);
    this.messages.push(message);
    // this.messages = [message, ...this.messages];
    this.content = '';

  }

}
