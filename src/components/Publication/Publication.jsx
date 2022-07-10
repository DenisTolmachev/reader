export const Publicatoin = ({ data }) => {
return (
    <article>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </article>
)
}