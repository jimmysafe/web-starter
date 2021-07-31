type TodoProps = {
  todo: TodoItem;
};

export type TodoItem = {
  done: boolean;
  id: string;
  description: string;
};

const Todo = ({ todo }: TodoProps) => {
  return (
    <div className="p-4 mb-2 rounded border border-white flex justify-between items-center">
      <div className="flex-1">
        <p className="text-center">{todo.description}</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo velit
          molestiae sed quisquam sint pariatur magni quae, ratione aliquam ad,
          eum ducimus nesciunt sequi expedita ut nisi ipsam mollitia. Provident
          est fugit incidunt iste praesentium facilis delectus doloribus, beatae
          ad similique numquam perferendis magnam mollitia. Earum, sed est
          nesciunt dolor ex quidem molestias aspernatur sapiente totam, cum
          aliquam quibusdam necessitatibus neque provident! Veniam, quisquam
          quos? Tempore recusandae libero blanditiis rem quibusdam possimus
          repellat officiis debitis at consequatur tenetur, porro reiciendis
          quam obcaecati dolores consectetur! Commodi earum repellendus debitis
          nemo. Numquam, aspernatur! Quae in, eveniet exercitationem architecto
          libero consectetur a natus veritatis ipsa facilis magnam deleniti
          recusandae maxime? Voluptate beatae tempora cum vero, impedit minus
          perferendis ducimus laudantium iusto dolorem velit. Iusto repellendus
          tempore minima illo quisquam adipisci quibusdam quam eaque, minus in
          necessitatibus, corporis nostrum sapiente soluta deserunt! Officiis
          illo blanditiis voluptate eius alias? Ad vero ipsum voluptatum
          voluptatibus? Nulla cum, soluta sequi, eveniet non enim sunt,
          reiciendis impedit recusandae quae quod laudantium consequuntur
          dolores placeat ex reprehenderit minus temporibus voluptates nisi
          cumque delectus vel. Rerum doloribus odit harum voluptates assumenda!
          Ab beatae cum commodi, doloremque repudiandae, asperiores dolorem
          atque reiciendis deserunt explicabo odit voluptate veniam voluptas!
          Molestiae, quibusdam! Ab libero illo, dignissimos aut voluptas
          incidunt nihil praesentium molestiae alias, placeat esse. Deserunt,
          ipsa. Sapiente voluptas qui sit nemo nesciunt, perspiciatis, ea
          aspernatur quisquam maxime dicta et deleniti cumque natus iure
          molestias quaerat vitae non soluta, quae dolore? Exercitationem illum
          consequuntur sed sequi, molestiae neque, quaerat dolores adipisci eos
          possimus, totam nemo hic consectetur distinctio. Porro corporis neque
          voluptates! Soluta saepe est magnam tempora tempore optio quasi vero
          voluptas, fugit mollitia laboriosam quas sit recusandae molestiae,
          rerum excepturi accusantium repellendus natus voluptatum dolorem.
          Iusto repellat incidunt magni beatae suscipit modi necessitatibus! Nam
          quo quisquam consequatur fuga sunt dolorem temporibus quos.
        </p>
      </div>
      <div>{todo.done ? <p>V</p> : <p>X</p>}</div>
    </div>
  );
};

export default Todo;
