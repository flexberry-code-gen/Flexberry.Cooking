﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Cooking
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ingredient.
    /// </summary>
    //  *** Start programmer edit section *** (Ingredient CustomAttributes)

    //  *** End programmer edit section *** (Ingredient CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("IngredientE", new string[] {
            "Name as \'Name\'"})]
    [View("IngredientL", new string[] {
            "Name as \'Name\'"})]
    public class Ingredient : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        //  *** Start programmer edit section *** (Ingredient CustomMembers)

        //  *** End programmer edit section *** (Ingredient CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Ingredient.Name CustomAttributes)

        //  *** End programmer edit section *** (Ingredient.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Ingredient.Name Get start)

                //  *** End programmer edit section *** (Ingredient.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Ingredient.Name Get end)

                //  *** End programmer edit section *** (Ingredient.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Ingredient.Name Set start)

                //  *** End programmer edit section *** (Ingredient.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Ingredient.Name Set end)

                //  *** End programmer edit section *** (Ingredient.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "IngredientE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View IngredientE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("IngredientE", typeof(IIS.Cooking.Ingredient));
                }
            }
            
            /// <summary>
            /// "IngredientL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View IngredientL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("IngredientL", typeof(IIS.Cooking.Ingredient));
                }
            }
        }
    }
}