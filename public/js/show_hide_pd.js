const ipn1Element = document.querySelector('#MatKhau')
const ipn2Element = document.querySelector('#XacNhanMatKhau')
const chkElement = document.querySelector('#HienMatKhau')

chkElement.addEventListener('click', function () {
    const currentType1 = ipn1Element.getAttribute('type')
    ipn1Element.setAttribute(
        'type',
        currentType1 === 'password' ? 'text' : 'password'
    )
    const currentType2 = ipn2Element.getAttribute('type')
    ipn2Element.setAttribute(
        'type',
        currentType2 === 'password' ? 'text' : 'password'
    )
})