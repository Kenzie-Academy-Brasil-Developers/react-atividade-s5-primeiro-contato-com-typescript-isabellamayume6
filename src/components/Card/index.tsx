interface User {
  nome: string;
  idade: number;
  hobby: string;
}
export const Card = ({ nome, idade, hobby }: User) => {
  return (
    <div>
      <span>{nome} </span>
      <span>{idade} </span>
      <span>{hobby} </span>
    </div>
  );
};
