import {NgModule} from '@angular/core';

import { TopicShortenPipe } from './topic-shorten.pipe';


// @NgModule({
//     declarations: [TopicShortenPipe],
//     imports: [
//      TopicShortenPipe
//     ],
//     exports: [
//         TopicShortenPipe
//     ]
// })

@NgModule({
    declarations: [TopicShortenPipe],

    imports: [
    
    ],
    exports: [
               TopicShortenPipe
          ]
  })
export class SharedPipeModule { }