import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base/base-page/base-page.component';
import { ProjectSection } from '../../models/types.models';

const contentSectionsData: ProjectSection[] = [
  {
    imageUrl: 'assets/images/chekers.png',
    title: 'Checkers with MiniMax Algorithm',
    description: 'This is one of my favorite and most difficult projects, because here I had to face the difficulties of creating a console game and correctly implementing AI using the Minimax algorithm. The project was created using C++, which made it possible to better manage memory and optimize the code for deeper recursion, which allows using the Minimax algorithm to process up to 12 moves forward on an average PC.',
    info: {
      year: '2023',
      role: 'Developer',
    }
  },
  {
    imageUrl: 'assets/images/angular.png',
    title: 'Angular in genearal',
    description: 'At the moment I am a Web Developer, I really like working in my company, with which I started my career as a programmer. Here I have implemented various projects and tasks, both with the user side and with the server side. Here, for example, I worked on creating a NFT Marketplace, where I was directly involved in processing payments in the blockchain, creating smart contracts and the client side.',
    info: {
      year: '2020-...',
      role: 'Developer',
    }
  },
  {
    imageUrl: 'assets/images/board.jpg',
    title: 'Custom mini Video Card',
    description: 'At the moment, this is the most difficult project that I have created, since this project has affected all areas of my education, from programming microcontrollers to creating an electronic circuit. In this project, I used the stm32h745 (dual core) to provide video signal processing for the VGA output. I implemented this project using processor timers, processor interrupts, and DMA. This was a challenge because the maximum timer frequency was 200 Mhz, and the pixel refresh rate at my resolution was 40 MHz.',
    info: {
      year: '2024',
      role: 'Engineer',
    }
  },
  {
    imageUrl: 'assets/images/pass.png',
    title: 'Passwords Hash Cracker',
    description: 'It was a fun and challenging project at the same time. In this project, my operating systems instructor provided us with a list of md5 hashes, 10 hashes that were hashes of user passwords. And the list of supposed passwords is about 1.5 million variants, for each of these passwords it was necessary to create its variations in the form of adding numbers from 0 to 99 to the front and back of the original password, it was also necessary to consider the options uppercase, capitalize and lowercase. These conditions led to the fact that one password from the list turns into 30,300 variations, which leads to the fact that 45.5 billion passwords need to be processed. To make it really work with a laptop, I wrote an optimization mechanism that checks the need to use uppercase, capitalize and lowercase options for the password (for example, for the variant !asdf or @yyyyyy$, there is no need to use capitalize and lowercase methods), I also had to face a challenge related to memory leaks, since it is unrealistic to allocate such a volume of memory on a laptop-type device, I had to write a connected list for processing passwords with chunks. In general, my laptop managed to do it overnight.',
    info: {
      year: '2023',
      role: 'Developer',
    }
  },
]

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends BasePageComponent implements OnInit {

  public contentSectionsData!: ProjectSection[];

  constructor() {
    super()
  }

  ngOnInit() {
    this.getContentSectionsData();
  }

  getContentSectionsData() {
    this.contentSectionsData = contentSectionsData;
  }

}
