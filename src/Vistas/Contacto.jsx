import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
    return (
        <Form style={{ marginLeft: '20px', marginRight: '20px' }}>
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <h1>Cuéntanos en qué podemos Ayudarte</h1>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ textAlign: 'center', display: 'block', padding: '20px' }}>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" style={{ padding: '10px' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ textAlign: 'center', display: 'block', padding: '20px' }}>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} style={{ padding: '10px' }} />
            </Form.Group>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="danger" style={{ color: 'white' }}>Enviar</Button>
            </div>
        </Form>
    );
}

export default TextControlsExample;






