using System;
using System.Collections.Generic;
using AngularCore.Models;
using Microsoft.EntityFrameworkCore;


namespace AngularCore.Repository
{
    public class ProductRepository : IRepository<Product>
    {

        private readonly ApplicationDbContext _db;

        public ProductRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        /// <summary>
        /// The property of disposed DataContext
        /// </summary>
        private bool disposed = false;

        /// <summary>
        /// Get all records from a table
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Product> GetAll()
        {
            return this._db.Products;

        }
        /// <summary>
        /// Get the record from a table by id
        /// </summary>
        /// <returns></returns>
        public Product GetById(int id)
        {
            Product product= db.Products.Find(id);
            return product;
        }

        /// <summary>
        /// Add a new record to a table
        /// </summary>
        /// <param name="item">the record wich need to added</param>
        /// <returns></returns>
        public Product Create(Product item)
        {
            try
            {
                this.db.Products.Add(item);
                this.db.SaveChanges();
                return item;
            }
            catch
            {
                return null;
            }

        }

        /// <summary>
        /// Update a recod Employees table by id
        /// </summary>
        /// <param name="id">id of record wich need to update</param>
        /// <param name="item">a record wich update</param>
        /// <returns></returns>
        public bool Update(int id, Product item)
        {
            Product p = db.Products.Find(id);
            try
            {
                p.Name = item.Name;
                p.Company = item.Company;
                this.db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }

        /// <summary>
        /// Remove a record from Employees table by id
        /// </summary>
        /// <param name="id">id of record wich delete</param>
        /// <returns></returns>
        public bool Delete(int id)
        {
            Product pr = this.db.Products.Find(id);
            try
            {
                this.db.Remove(pr);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }

        /// <summary>
        /// The Dispose method
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.db.Dispose();
                }
            }
            this.disposed = true;
        }

        /// <summary>
        /// The Dispose(true) method 
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
