function Author({children, name, courses}){ 
  return(
    <>
      <p>Nome do Autor: {name}</p>
      <p>Curso: {children}</p>
      <p>Preço: {courses.price}</p>
      <p>Carga Horária: {courses.workload}</p>
    </>
  );
}
export default Author;