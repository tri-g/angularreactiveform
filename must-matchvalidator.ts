import{FormGroup} from '@angular/forms';

export function MustMatch(control:string,matchingcontrol:string)
{ 
	return (formGroup:FormGroup)=>{
	const cont=formGroup.controls[control];
	const matchingcont=formGroup.controls[matchingcontrol];
	if(matchingcont.errors && !matchingcont.errors.mustMatch)
	{
		return;
	}
	if(cont.value !== matchingcont.value)
	{
		matchingcont.setErrors({mustMatch:true});
	}
	else
	{
		matchingcont.setErrors(null);
	}
	
}
}