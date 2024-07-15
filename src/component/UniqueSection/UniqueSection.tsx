
type Testimonial = {
  name: string;
  text: string;
  image: string;
};
import leomessi from '../../assets/others/leomessi.jpeg'
import angeldimariajm from '../../assets/others/angeldimariajm.jpeg'
import rodridepaul from '../../assets/others/rodridepaul.jpeg'

const testimonials: Testimonial[] = [
  {
    name: 'Leo Messi',
    text: 'The service was exceptional! I received my order quickly, and the quality is fantastic.',
    image: leomessi,
  },
  {
    name: 'Angel Di Mariajm',
    text: 'I love the variety of products available. I will definitely be coming back for more!',
    image: angeldimariajm,
  },
  {
    name: 'Rodride Paul',
    text: 'Fantastic experience! Customer support was very helpful in resolving my queries.',
    image: rodridepaul,
  },
];

const UniqueSection = () => {
  return (
    <div className=" py-12">
      <h2 className="text-4xl text-center font-bold my-10 text-gray-800">What Our Customers Say</h2>
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 shadow-md flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 mt-2">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueSection;
