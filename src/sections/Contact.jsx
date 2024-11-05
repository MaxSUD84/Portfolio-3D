import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // service_t27epux
      // template_15frv7k
      await emailjs.send(
        'service_t27epux',
        'template_15frv7k',
        {
          from_name: form.name,
          to_name: 'Max',
          from_email: form.email,
          to_email: 'maxsud1984@gmail.com',
          message: form.message,
        },
        'l4waAG6N9A9SFhj-k',
      );
      setLoading(false);
      alert('Your message has been sent successfully!');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Обратная связь</h3>
          <p className="text-lg text-white-600 mt-3">
            Если нужна помощь с улучшением интерфейсов сайта, добавлением новых
            функций и фич или воплощением новых, уникальных проектов в жизнь,
            готов обсудить и помочь вам в этом. Оставьте свои контактные данные
            и я с вами свяжусь.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">ФИО</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Иванов Иван Иванович"
                className="field-input"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="ivanov.ivan@mail.ru"
                className="field-input"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Сообщение</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Привет, я хотел(а) бы преложить вам ..."
              />
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? 'Отправка...' : 'Отправить'}
              <img
                src="assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
