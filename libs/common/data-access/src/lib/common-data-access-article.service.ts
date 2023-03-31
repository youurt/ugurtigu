import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface CommonDataAccessArticleHeading {
  id: string;
  title: string;
  content: string;
}

export interface CommonDataAccessArticleStructure
  extends CommonDataAccessArticleHeading {
  subHeadings: CommonDataAccessArticleHeading[];
}

@Injectable({
  providedIn: 'root',
})
export class CommonDataAccessArticleService {
  /**
   * Observable of articles.
   */
  articleStructures$: Observable<CommonDataAccessArticleStructure[]> = of([
    {
      id: 'h1',
      title: 'some h1',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
      debitis odio architecto voluptates quis, aperiam itaque ratione animi
      molestiae hic modi voluptate dolorum quidem fugit voluptas repellendus
      alias nemo excepturi! Minus, incidunt. Perferendis consequatur labore
      ea, iste quia non aspernatur id inventore illum molestiae cupiditate
      quam numquam dolores voluptates itaque deserunt accusamus quasi
      necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
      veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
      est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
      nemo. Aliquid consequatur natus ad explicabo, numquam provident
      excepturi rem laudantium iste ea beatae accusamus. Vitae ab
      perspiciatis fugiat officia eligendi, delectus saepe sed inventore
      quaerat, est, maxime praesentium natus! Tempora necessitatibus
      distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
      saepe, ab architecto quis! Pariatur, incidunt. Repudiandae officia
      facilis corrupti aut molestias illum accusantium distinctio debitis
      cumque. Veritatis deserunt, asperiores minus delectus vel rem? Rem
      libero dignissimos commodi. Esse sequi repellat saepe sapiente
      perferendis vel doloribus a ut numquam aspernatur dignissimos
      exercitationem soluta accusamus, totam eligendi quae earum, possimus
      hic, nobis qui voluptate voluptates veritatis adipisci aut! Nihil sint
      debitis a quibusdam aperiam? Ipsam mollitia, officiis autem dolorum
      voluptatibus perspiciatis illum obcaecati pariatur illo at, placeat
      maiores fugit alias itaque quasi, eos repudiandae atque sapiente
      distinctio deserunt eligendi! Itaque error atque, consequatur sapiente
      adipisci omnis laboriosam corporis porro asperiores eaque dolor natus
      modi tempora dolorem accusamus labore repellat quisquam nam expedita
      in hic vel perferendis. Saepe culpa cupiditate dolores nemo? Atque
      quis ea fugit error nulla sunt reiciendis? Accusantium quaerat velit
      omnis laborum aut eius numquam, sint temporibus alias, maxime neque
      earum, a dolor animi illo quasi. Repellendus eaque, incidunt ducimus
      reiciendis natus sapiente, ut fugiat eligendi id vel nam magni maxime.
      Ipsam reprehenderit culpa, nostrum nam corrupti fugit dignissimos
      eligendi voluptas praesentium, illum provident nesciunt ab eius quam
      eaque. Minus mollitia sed ratione possimus. Nesciunt esse quae facilis
      tenetur similique excepturi ratione rem incidunt totam enim. Animi
      unde sequi, quisquam hic aliquam veniam. Ad ipsam ea saepe quam, alias
      magni vel reprehenderit reiciendis a soluta. Architecto commodi maxime
      fuga esse consequatur, labore illo libero, mollitia ut tenetur ducimus
      in sunt quae accusantium odit dolor. Itaque reiciendis laborum
      voluptatem tenetur aut nulla accusantium culpa aliquam nesciunt sed
      debitis a possimus, maiores autem iste esse! Maiores facere magni nam
      id doloremque in voluptas? Repellendus deserunt in vero eaque facilis,
      fugiat accusamus maxime a iste, nihil porro dicta rem, deleniti
      impedit. Aspernatur natus tempora qui ut architecto praesentium illo
      atque! Odio, aut maxime, reiciendis molestiae magnam incidunt
      excepturi ipsum, nesciunt dignissimos necessitatibus commodi vel
      pariatur recusandae fugit ullam! Nisi reiciendis accusantium
      laudantium impedit nobis dolor assumenda? Neque error ipsa delectus
      quis sed, nesciunt sapiente, natus voluptas voluptatibus ducimus atque
      distinctio sequi. Voluptas ullam a qui distinctio eveniet non harum,
      obcaecati praesentium quae consequuntur ad architecto quidem eligendi
      in fugit, numquam, dolorum dolore. Saepe dolore sunt laboriosam unde
      quibusdam alias possimus. Ad, veritatis? Nesciunt placeat corrupti
      quod hic facilis obcaecati maiores harum enim excepturi aliquam!`,
      subHeadings: [
        {
          id: 'h2',
          title: 'Article 1 Subheading 1',
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          debitis odio architecto voluptates quis, aperiam itaque ratione animi
          molestiae hic modi voluptate dolorum quidem fugit voluptas repellendus
          alias nemo excepturi! Minus, incidunt. Perferendis consequatur labore
          ea, iste quia non aspernatur id inventore illum molestiae cupiditate
          quam numquam dolores voluptates itaque deserunt accusamus quasi
          necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
          veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
          est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
          nemo. Aliquid consequatur natus ad explicabo, numquam provident
          excepturi rem laudantium iste ea beatae accusamus. Vitae ab
          perspiciatis fugiat officia eligendi, delectus saepe sed inventore
          quaerat, est, maxime praesentium natus! Tempora necessitatibus
          distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
          saepe, ab architecto quis! Pariatur, incidunt.`,
        },
        {
          id: 'h3',
          title: 'Article 1 Subheading 2',
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          debitis odio architecto voluptates quis, aperiam itaque ratione animi
          molestiae hic modi voluptate dolorum quidem fugit voluptas repellendus
          alias nemo excepturi! Minus, incidunt. Perferendis consequatur labore
          ea, iste quia non aspernatur id inventore illum molestiae cupiditate
          quam numquam dolores voluptates itaque deserunt accusamus quasi
          necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
          veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
          est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
          nemo. Aliquid consequatur natus ad explicabo, numquam provident
          excepturi rem laudantium iste ea beatae accusamus. Vitae ab
          perspiciatis fugiat officia eligendi, delectus saepe sed inventore
          quaerat, est, maxime praesentium natus! Tempora necessitatibus
          distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
          saepe, ab architecto quis! Pariatur, incidunt. Repudiandae officia
          facilis corrupti aut molestias illum accusantium distinctio debitis
          cumque. Veritatis deserunt, asperiores minus delectus vel rem?`,
        },
        {
          id: 'h31',
          title: 'Article 1 Subheading 3',
          content: `I am <strong>strong</strong>! Perferendis consequatur labore
          ea, iste quia non aspernatur id inventore illum molestiae cupiditate
          quam numquam dolores voluptates itaque deserunt accusamus quasi
          necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
          veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
          est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
          nemo. Aliquid consequatur natus ad explicabo, numquam provident
          excepturi rem laudantium iste ea beatae accusamus. Vitae ab
          perspiciatis fugiat officia eligendi, delectus saepe sed inventore
          quaerat, est, maxime praesentium natus! Tempora necessitatibus
          distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
          saepe, ab architecto quis! Pariatur, incidunt.`,
        },
      ],
    },
    {
      id: 'otherh1',
      title: 'some other h1',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
      debitis odio architecto voluptates quis, aperiam itaque ratione animi
      molestiae hic modi voluptate dolorum quidem fugit voluptas repellendus
      alias nemo excepturi! Minus, incidunt. Perferendis consequatur labore
      ea, iste quia non aspernatur id inventore illum molestiae cupiditate
      quam numquam dolores voluptates itaque deserunt accusamus quasi
      necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
      veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
      est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
      nemo. Aliquid consequatur natus ad explicabo, numquam provident
      excepturi rem laudantium iste ea beatae accusamus. Vitae ab
      perspiciatis fugiat officia eligendi, delectus saepe sed inventore
      quaerat, est, maxime praesentium natus! Tempora necessitatibus
      distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
      saepe, ab architecto quis! Pariatur, incidunt. Repudiandae officia
      facilis corrupti aut molestias illum accusantium distinctio debitis
      cumque. Veritatis deserunt, asperiores minus delectus vel rem? Rem
      libero dignissimos commodi. Esse sequi repellat saepe sapiente
      perferendis vel doloribus a ut numquam aspernatur dignissimos
      exercitationem soluta accusamus, totam eligendi quae earum, possimus
      hic, nobis qui voluptate voluptates veritatis adipisci aut! Nihil sint
      debitis a quibusdam aperiam? Ipsam mollitia, officiis autem dolorum
      voluptatibus perspiciatis illum obcaecati pariatur illo at, placeat
      maiores fugit alias itaque quasi, eos repudiandae atque sapiente
      distinctio deserunt eligendi! Itaque error atque, consequatur sapiente
      adipisci omnis laboriosam corporis porro asperiores eaque dolor natus
      modi tempora dolorem accusamus labore repellat quisquam nam expedita
      in hic vel perferendis. Saepe culpa cupiditate dolores nemo? Atque
      quis ea fugit error nulla sunt reiciendis? Accusantium quaerat velit
      omnis laborum aut eius numquam, sint temporibus alias, maxime neque
      earum, a dolor animi illo quasi. Repellendus eaque, incidunt ducimus
      reiciendis natus sapiente, ut fugiat eligendi id vel nam magni maxime.
      Ipsam reprehenderit culpa, nostrum nam corrupti fugit dignissimos
      eligendi voluptas praesentium, illum provident nesciunt ab eius quam
      eaque. Minus mollitia sed ratione possimus. Nesciunt esse quae facilis
      tenetur similique excepturi ratione rem incidunt totam enim. Animi
      unde sequi, quisquam hic aliquam veniam. Ad ipsam ea saepe quam, alias
      magni vel reprehenderit reiciendis a soluta. Architecto commodi maxime
      fuga esse consequatur, labore illo libero, mollitia ut tenetur ducimus
      in sunt quae accusantium odit dolor. Itaque reiciendis laborum
      voluptatem tenetur aut nulla accusantium culpa aliquam nesciunt sed
      debitis a possimus, maiores autem iste esse! Maiores facere magni nam
      id doloremque in voluptas? Repellendus deserunt in vero eaque facilis,
      fugiat accusamus maxime a iste, nihil porro dicta rem, deleniti
      impedit. Aspernatur natus tempora qui ut architecto praesentium illo
      atque! Odio, aut maxime, reiciendis molestiae magnam incidunt
      excepturi ipsum, nesciunt dignissimos necessitatibus commodi vel
      pariatur recusandae fugit ullam! Nisi reiciendis accusantium
      laudantium impedit nobis dolor assumenda? Neque error ipsa delectus
      quis sed, nesciunt sapiente, natus voluptas voluptatibus ducimus atque
      distinctio sequi. Voluptas ullam a qui distinctio eveniet non harum,
      obcaecati praesentium quae consequuntur ad architecto quidem eligendi
      in fugit, numquam, dolorum dolore. Saepe dolore sunt laboriosam unde
      quibusdam alias possimus. Ad, veritatis? Nesciunt placeat corrupti
      quod hic facilis obcaecati maiores harum enim excepturi aliquam!`,
      subHeadings: [
        {
          id: 'otherh2',
          title: 'Article other 1 Subheading 1',
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          debitis odio architecto voluptates quis, aperiam itaque ratione animi
          molestiae hic modi voluptate dolorum quidem fugit voluptas repellendus
          alias nemo excepturi! Minus, incidunt. Perferendis consequatur labore
          ea, iste quia non aspernatur id inventore illum molestiae cupiditate
          quam numquam dolores voluptates itaque deserunt accusamus quasi
          necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
          veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
          est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
          nemo. Aliquid consequatur natus ad explicabo, numquam provident
          excepturi rem laudantium iste ea beatae accusamus. Vitae ab
          perspiciatis fugiat officia eligendi, delectus saepe sed inventore
          quaerat, est, maxime praesentium natus! Tempora necessitatibus
          distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
          saepe, ab architecto quis! Pariatur, incidunt.`,
        },
        {
          id: 'otherh3',
          title: 'Article other 1 Subheading 2',
          content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          debitis odio architecto voluptates quis, aperiam itaque ratione animi
          molestiae hic modi voluptate dolorum quidem fugit voluptas repellendus
          alias nemo excepturi! Minus, incidunt. Perferendis consequatur labore
          ea, iste quia non aspernatur id inventore illum molestiae cupiditate
          quam numquam dolores voluptates itaque deserunt accusamus quasi
          necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
          veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
          est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
          nemo. Aliquid consequatur natus ad explicabo, numquam provident
          excepturi rem laudantium iste ea beatae accusamus. Vitae ab
          perspiciatis fugiat officia eligendi, delectus saepe sed inventore
          quaerat, est, maxime praesentium natus! Tempora necessitatibus
          distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
          saepe, ab architecto quis! Pariatur, incidunt. Repudiandae officia
          facilis corrupti aut molestias illum accusantium distinctio debitis
          cumque. Veritatis deserunt, asperiores minus delectus vel rem?`,
        },
        {
          id: 'otherh31',
          title: 'Article other 1 Subheading 3',
          content: `I am <strong>strong</strong>! Perferendis consequatur labore
          ea, iste quia non aspernatur id inventore illum molestiae cupiditate
          quam numquam dolores voluptates itaque deserunt accusamus quasi
          necessitatibus sunt eveniet, rem, eius nisi? Rem eveniet vel eum quia
          veniam non officiis fugit fugiat, illo odit sint minima tenetur quo
          est at sit, cupiditate qui blanditiis, autem debitis alias ea animi
          nemo. Aliquid consequatur natus ad explicabo, numquam provident
          excepturi rem laudantium iste ea beatae accusamus. Vitae ab
          perspiciatis fugiat officia eligendi, delectus saepe sed inventore
          quaerat, est, maxime praesentium natus! Tempora necessitatibus
          distinctio nemo, omnis esse quisquam ipsam, quibusdam odio ex quasi
          saepe, ab architecto quis! Pariatur, incidunt.`,
        },
      ],
    },
  ]);
}
