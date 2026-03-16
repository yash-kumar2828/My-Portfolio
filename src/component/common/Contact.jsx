import styles from './Contact.module.css'
import { useForm } from "react-hook-form"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <>
            <section id='contact' style={{ background: '#1b2735' }}>
                <div className={`container-lg ${styles.contactContainer}`}>
                    <div className={styles.contactForm} >
                        <h5 data-aos="zoom-in-down">Let’s Connect</h5>
                        <h1 data-aos="zoom-in-up">Send Your Message</h1>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.formsData}>
                                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"  {...register("name", { required: true })} />
                                    <label htmlFor="name">Your Name</label>
                                    {errors.name && <span className="text-warning">This field is required</span>}
                                </div>
                                <div className={`form-floating mb-3 ${styles.formsValue}`} >
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" {...register("email", { required: true })} />
                                    <label htmlFor="email">Your Email</label>
                                    {errors.email && <span className="text-warning">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-floating mb-3" >
                                <textarea name="" id="message" className="form-control" placeholder="Message" style={{ width: "95%", height: '10rem' }} {...register("message", { required: true })}></textarea>
                                <label htmlFor="message">Message</label>
                                {errors.message && <span className="text-warning">This field is required</span>}
                            </div>
                            <div className={`form-floating mb-3 ${styles.submitButton}`}>
                                <button type="submit" className=" w-100 py-3">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;