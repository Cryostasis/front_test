import api from './';

export function question(token, values) {
	var val = {
		"g-recaptcha-response": token,
		name: values.name +' - ' + values.comp_name, 
		email_or_phone: (values.email ? values.email : '') + ' ' + (values.phone ? values.phone : ''),
		order_message: values.question ? values.question : '',
	}
	return api.post('/manager/api/order/582013c206c7574cd7e9ce5d', val)
}
