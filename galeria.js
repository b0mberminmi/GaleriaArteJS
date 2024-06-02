document.addEventListener('DOMContentLoaded', function() {

    // Seleccionamos todos los botones de clase 'delete-button'
    const deleteButtons = document.querySelectorAll('.delete-button');

    // Iteramos sobre cada botón y agregamos un evento de clic
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtenemos el elemento padre del botón, que es el contenedor de la imagen y el botón
            const container = button.parentElement;
            // Eliminamos el contenedor, que contiene tanto la imagen como el botón
            container.remove();
        });
    });

    const imageInfo = {
        1: `
            <img src='img/imagen1.jpg' alt='Exhibición Fungus' class='img-fluid'><br>
            <strong>Nombre:</strong> Exhibición Fungus<br>
            <strong>Fecha:</strong> Mayo 2020<br>
            <strong>Autor:</strong> Robert J.<br>
            <strong>Descripción:</strong> Arte, ciencia y naturaleza se combinan ofreciendo una oportunidad única para acercarse al Reino Fungi desde nuevas perspectivas.<br>
            La muestra presenta ocho especies de hongos recolectadas en lugares de difícil acceso o de ambiente extremo en Chile. En el centro de la sala, los visitantes pueden convertirse en esporas y ayudar, al igual que los hongos, a remediar desastres ecológicos y sanar.<br>
        `,
        2: `
            <img src='img/imagen2.jpg' alt='Círculos Exposición' class='img-fluid'><br>
            <strong>Nombre:</strong> Círculos<br>
            <strong>Fecha:</strong> Octubre 2020<br>
            <strong>Autor:</strong> Pedro L. Rencoret.<br>
            <strong>Descripción:</strong> Esta exposición sitúa al pintor, crítico y promotor del arte Pedro Lira Rencoret (1845-1912) en el centro de las tensiones y disputas originadas en los círculos artísticos. Examina las redes asociativas y los múltiples nodos que dieron origen al sistema de las artes en Chile durante el siglo XIX y principios del XX.
        `,
        3: `
            <img src='img/imagen3.jpg' alt='Vaca desinteresada Exhibición' class='img-fluid'><br>
            <strong>Nombre:</strong> Vaca Desinteresada<br>
            <strong>Fecha:</strong> Muestra permanente <br>
            <strong>Autor:</strong> Pamela D.<br>
            <strong>Descripción:</strong> En un vasto campo de tonos terrosos, la Vaca Desinteresada se yergue con una apatía que desafía la gravedad. Su figura es la personificación de la indiferencia, una paradoja en sí misma. La artista ha capturado su esencia con maestría, utilizando una paleta de colores minimalista.
        `,
        4: `
            <img src='img/imagen4.jpg' alt='Herbolaria Exhibición 1' class='img-fluid'><br>
            <strong>Nombre:</strong> Herbolaria<br>
            <strong>Fecha:</strong> Enero 2021<br>
            <strong>Autor:</strong> Jazmín Bührin.<br>
            <strong>Descripción:</strong> El recuerdo personal de haber vivido en el campo, las imágenes de un paisaje habitado por mujeres y los saberes vinculados a la naturaleza se materializan en cada trazo. Desnudos femeninos, plantas, animales y objetos cotidianos componen su imaginario pictórico, revelando una búsqueda constante de conexión con lo emocional, lo afectivo, lo social y lo político.
        `,
        5: `
            <img src='img/imagen5.jpg' alt='Herbolaria Exhibición 2' class='img-fluid'><br>
            <strong>Nombre:</strong> Herbolaria<br>
            <strong>Fecha:</strong> Enero 2021<br>
            <strong>Autor:</strong> Jazmín Bührin.<br>
            <strong>Descripción:</strong> La artista convierte sus obras en un lenguaje que trasciende lo visual y nos invita a habitar la ansiedad, el azar y la certeza del proceso creativo.<br> Es un espacio donde la mujer, la naturaleza y la soledad se encuentran en un misticismo que nos invita a reflexionar sobre nuestra propia existencia y conexión con el entorno.
        `,
        6: `
            <img src='img/imagen6.jpg' alt='Twiggy Homenaje' class='img-fluid'><br>
            <strong>Nombre:</strong> Homenaje a Twiggy<br>
            <strong>Fecha:</strong> Abril 2021<br>
            <strong>Autor:</strong> Patti B.<br>
            <strong>Descripción:</strong> El estilo audaz de Twiggy se nutría de su amor por la costura y la actuación. Sus atuendos, inspirados en las estrellas de Hollywood de los años 40, como Joan Crawford y Bette Davis, se convirtieron en su sello distintivo. El nombre “Twiggy” surgió mientras trabajaba en Kahn and Bell, ya que llevaba falsas rastas atadas en nudos, que se asemejaban a ramitas (en inglés, “twigs”).
        `,
        7: `
            <img src='img/imagen7.jpg' alt='Floral 1' class='img-fluid'><br>
            <strong>Nombre:</strong> Floral<br>
            <strong>Fecha:</strong> Octubre 2023<br>
            <strong>Autor:</strong> María S.<br>
            <strong>Descripción:</strong> Conocida por sus representaciones de flores a gran escala, pintó lirios con un enfoque sensual y abstracto. Sus obras exploran la relación entre la naturaleza y la espiritualidad.
        `,
        8: `
            <img src='img/imagen8.jpg' alt='Floral 2' class='img-fluid'><br>
            <strong>Nombre:</strong> Floral<br>
            <strong>Fecha:</strong> Octubre 2023<br>
            <strong>Autor:</strong> María S.<br>
            <strong>Descripción:</strong> La artista demuestra su amor por pintar ramos de flores con precisión casi científica. Sus obras mostraban arreglos florales simétricos y fueron precursoras de una tendencia que ha perdurado en la historia del arte.
        `
    };

    // JavaScript para manejar la Modal
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const images = document.getElementsByClassName("artwork");

    // Iterar sobre las imágenes y añadir el evento de click
    for (let img of images) {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            const id = img.getAttribute('data-id');
            document.getElementById("modalText").innerHTML = imageInfo[id];
        });
    }

    // Cuando el usuario hace click en <span> (x), cerrar la modal
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cuando el usuario hace click fuera de la modal, cerrarla
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});
