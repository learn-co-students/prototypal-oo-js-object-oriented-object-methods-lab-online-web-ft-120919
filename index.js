class President
{
  constructor(name,politicalParty,yearsInOffice,homeState)
  {
    this.name=name;
    this.politicalParty=politicalParty;
    this.yearsInOffice=yearsInOffice;
    this.homeState=homeState;
  }

  veto()
  {
    return "NO!"
  }

  passBill()
  {
    return "You can do that!"
  }

  doCharity()
  {
    return "I like to help people."
  }

  conductPressInterview()
  {
    return "I am proud to be an American."
  }

  sayHi()
  {
    return "Hi, my name is "+ this.name+". I am from "+this.homeState+". I represent the "+this.politicalParty+"s, and was in office "+this.yearsInOffice+"."
  }
}

var GeorgeWashington=new President("George Washington","Federalist Party", 68,"New York");

var AbrahamLincoln=new President("Abraham Lincoln","Federalist Party", 68,"New York");

var RichardNixon=new President("Richard Nixon","Federalist Party", 68,"New York");

var JimmyCarter=new President("Jimmy Carter", "Federalist Party", 68,"New York");