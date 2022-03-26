function check()
{
	var ht = f.HT.value;
	var dc = f.DC.value;
	var mail = f.Mail.value;
	var dt = f.DT.value;
	
	var mailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var dtRegExp = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/ ;
	
	if(ht == '')
	{
		alert('Họ và tên không được bỏ trống!');
		return false;
	}
	if(dc == '')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	if(mail == '')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
	if(dt == '')
	{
		alert('Số điện thoại không được bỏ trống!');
		return false;
	}
	if(!mailRegExp.test(mail))
	{
		alert('Email không hợp lệ');
		return false;
	}
	if(!dtRegExp.test(dt))
	{
		alert('Số điện thoại không hợp lệ');
		return false;
	}
	return true;
} 