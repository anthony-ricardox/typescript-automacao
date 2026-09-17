import { test, expect } from "vitest";

const Api2 = "https://jsonplaceholder.typicode.com";

test("Metodo POST  para criar um novo post", async () => {
  const res = await fetch(`${Api2}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title: "Meu novo POST",
      body: "Conteudo do meu novo Post",
    }),
    //Testar Status code
      
  });
  expect(res.status).toBe(201);
  
  const dados = await res.json()
  expect(dados.title).toBe("Meu novo POST")
  expect(dados.body).toBe("Conteudo do meu novo Post")
  
});
